<template>
  <nav class="navbar">
    <span class="brand">Email Editor</span>
    <div class="actions">
      <el-button type="text" @click="openPreviewDialog">
        <div style="display: flex; align-items: center; column-gap: 4px">
          <i class="material-icons" style="font-size: 16px">visibility</i>
          <span style="font-size: 16px">预览</span>
        </div>
      </el-button>
      <el-button type="text">
        <div style="display: flex; align-items: center; column-gap: 4px">
          <i class="material-icons" style="font-size: 16px">code</i>
          <span style="font-size: 16px">代码</span>
        </div>
      </el-button>

      <a href="#" @click.prevent="toggleImportDialog">导入</a>
      <a href="#" @click.prevent="toggleExportDialog">导出</a>
      <el-switch :value="enabled" @input="updateState" active-color="#13ce66" inactive-color="gray">
      </el-switch>
    </div>

    <el-dialog title="Export" :visible.sync="showExportDialog" :modal="false" width="30%">
      <div v-if="showExportDialog" class="disable-select">
        <textarea ref="exportTextarea" :rows="8" :value="editor.export()" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="toggleExportDialog">Close</el-button>
        <el-button size="medium" type="primary" @click="copyExport">Copy</el-button>
      </span>
    </el-dialog>

    <el-dialog title="Import" :visible.sync="showImportDialog" :modal="false" width="30%">
      <textarea :rows="8" v-model="importData" />
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="toggleImportDialog">Close</el-button>
        <el-button size="medium" type="primary" @click="doImport">Import</el-button>
      </span>
    </el-dialog>

    <el-dialog
      title="预览"
      :visible.sync="showPreviewDialog"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      width="80%"
      center
      :modal="false"
    >
      <div style="display: flex; heigth: 600px; width: 100%; column-gap: 10px">
        <div class="codeEditBox">
          <el-button class="applyJson" type="text" @click="applyData">应用</el-button>
          <ACEEDITOR
            v-model="code"
            @init="editorInit"
            @input="codeChange"
            lang="javascript"
            :options="editorOptions"
            theme="chrome"
          ></ACEEDITOR>
        </div>
        <div
          style="
            height: 600px;
            width: 75%;
            border: 1px solid #dcdee2;
            overflow: auto;
          "
        >
          <div v-html="preview"></div>
        </div>
        <el-button type="text" @click="sendEmail" style="position: absolute; right: 30px;top:40px">
            <i class="el-icon-position"></i> 发邮件
          </el-button>
      </div>
    </el-dialog>
  </nav>
</template>

<script>
import ACEEDITOR from "vue2-ace-editor";
import template from "../template-web.js";

export default {
  inject: ["editor"],
  components: { ACEEDITOR },
  data() {
    return {
      showExportDialog: false,
      showImportDialog: false,
      importData: "",
      showPreviewDialog: false,
      code: `{
        "desc": "1243",
        "params": "124w",
        "title": "hello world",
        "imgUrl": "https://mochi-1303099125.cos.ap-guangzhou.myqcloud.com/20210819111753.png"
      }`,
      editorOptions: {
        // 设置代码编辑器的样式
        // 启用基本自动完成
        enableBasicAutocompletion: true,
        // 启用代码段
        enableSnippets: true,
        // 启用实时自动完成
        enableLiveAutocompletion: true,
        // 标签大小
        tabSize: 2,
        // 设置字号
        fontSize: 18,
        // 去除编辑器里的竖线
        showPrintMargin: false,
      },
      preview: "",
      receivers: ["v_mningchen"],
      title: "自动化 demo",
    };
  },
  computed: {
    enabled() {
      return this.editor.enabled;
    },
  },
  methods: {
    sendEmail() {
      axios
        .post(
          `http://12306.woa.com/sendEmailApi`,
          {
            receivers: this.receivers,
            content: this.preview,
            title: "自动化测试报告",
          },
          {
            headers: {
              cookie:
                "x-client-ssid=17faf6fda8f-bb1dd220d221c5db0686a13fa4c235dbbf6739c7; TCOA_TICKET=TOF4TeyJ2IjoiNCIsInRpZCI6Ikdpb0RhQnFWN0g5ZEdzU0tDNDJOWEZNeGI5T1Z2RW9vIiwiaXNzIjoiMTAuOTkuMjA4LjU2IiwiaWF0IjoiMjAyMi0wMy0yMlQxMDoyMzozNi43NDMxNDQ4NzIrMDg6MDAiLCJhdWQiOiIwLjAuMC4wIiwiaGFzaCI6IjRBQjU5MEEzMjFFOTZGQUM5QkVFQ0VFRTVGMjAyNkYyNjg3OTVDMTQ3QjkwNUUwQUMzNjg3RDZGOUU2QUIxNkYiLCJuaCI6IjM4NDNGNjc1QTFBOTAyQ0Q2RDg2NzJBRDkyMjBBNDNEQ0NBMjMxMTJEODYyMEQxODVBMzM2M0NDMkI0OThGMDAifQ; TCOA=GioDaBqV7H9dGsSKC42NXFMxb9OVvEoo; x-host-key-ngn=17faf6fdbf9-67f87cb67c7fd37e740f4b2799bc66cd2f2f6780; RIO_TCOA_TICKET=tof:TOF4TeyJ2IjoiNCIsInRpZCI6Ikdpb0RhQnFWN0g5ZEdzU0tDNDJOWEZNeGI5T1Z2RW9vIiwiaXNzIjoiMTAuOTkuMjA4LjU2IiwiaWF0IjoiMjAyMi0wMy0yMlQxMDoyMzozNi43NDMxNDQ4NzIrMDg6MDAiLCJhdWQiOiIwLjAuMC4wIiwiaGFzaCI6IjRBQjU5MEEzMjFFOTZGQUM5QkVFQ0VFRTVGMjAyNkYyNjg3OTVDMTQ3QjkwNUUwQUMzNjg3RDZGOUU2QUIxNkYiLCJuaCI6IjM4NDNGNjc1QTFBOTAyQ0Q2RDg2NzJBRDkyMjBBNDNEQ0NBMjMxMTJEODYyMEQxODVBMzM2M0NDMkI0OThGMDAifQ; wxuin=47915818328573; x-host-key-front=17faf98ba4b-745bf610cb8d822d5603fab2df465f4ba11e7517",
            },
          }
        )
        .then((res) => {
          console.log(res);
        });
    },

    applyData() {
      let code = JSON.parse(this.code);
      console.log("code", code);

      // console.log('oScript.innerHTML', oScript.innerHTML);
      let html = template("tpl", JSON.parse(this.code));
      console.log(html);
      this.preview = html;
    },

    handleElementStyle(elementStyle) {
      const style = {};
      const styleResolverMap = {
        "box-shadow": ({ x, y, blur, spread, color }) =>
          `${x}px ${y}px ${blur}px ${spread}px ${color}`,
        "background-image": (url) => (url !== "none" ? `url('${url}')` : url),
        "text-shadow": ({ x, y, blur, color }) => `${x}px ${y}px ${blur}px ${color}`,
        width: (width) => `${width}%`,
        "border-radius": (r) => `${r}%`,
      };

      Object.entries(elementStyle).forEach(([key, value]) => {
        if (styleResolverMap[key]) {
          style[key] = styleResolverMap[key](value);
        } else if (typeof value === "number") {
          style[key] = `${value}px`;
        } else {
          style[key] = value;
        }
      });

      let styleStr = "";
      for (const key in style) {
        styleStr = styleStr + `${key}:${style[key]};`;
      }
      // console.log("styleStr", styleStr);
      return styleStr;
    },

    createNode(pnode, arr) {
      arr.forEach((item) => {
        let dom;
        switch (item.componentName) {
          case "Heading": {
            dom = document.createElement(item.props.headingType);
            dom.setAttribute("style", this.handleElementStyle(item.props.elementStyle));
            dom.innerText = item.props.content;
            break;
          }

          case "Canvas": {
            dom = document.createElement("div");
            dom.setAttribute(
              "style",
              this.handleElementStyle(item.props.elementStyle) + "display: flex;"
            );
            // 去除掉 100% 宽度
            dom.style.width = "auto";
            break;
          }

          case "Paragraph": {
            dom = document.createElement("p");
            dom.setAttribute("style", this.handleElementStyle(item.props.elementStyle));
            dom.innerText = item.props.content;
            break;
          }

          case "Picture": {
            dom = document.createElement("img");
            dom.setAttribute("style", this.handleElementStyle(item.props.elementStyle));
            dom.setAttribute("src", item.props.imageUrl);
            break;
          }

          case "Button": {
            dom = document.createElement("button");
            dom.setAttribute(
              "style",
              this.handleElementStyle(item.props.elementStyle) + 'cursor: pointer;'
            );
            dom.innerHTML = item.props.content;
            console.log('item.props.btnUrl', item.props.btnUrl);
            dom.onclick = () => {
                window.location.href = item.props.btnUrl;
            }
            break;
          }

          default:
            break;
        }
        pnode.appendChild(dom);
        if (item.children.length) {
          this.createNode(dom, item.children);
        }
      });

      return pnode;
    },

    openPreviewDialog() {
      let parentNode = document.createElement("div");
      parentNode.setAttribute("id", "previewDialog");

      let oScript = document.getElementById("tpl");
      console.log("this.editor.nodes", this.editor.nodes);
      let item = this.createNode(parentNode, this.editor.nodes);
      oScript.innerHTML = item.outerHTML;
      this.preview = item.outerHTML;
      this.showPreviewDialog = true;
    },

    codeChange(val) {
      console.log(val);
    },
    editorInit() {
      require("brace/theme/chrome");
      require("brace/ext/language_tools"); //language extension prerequsite...
      require("brace/mode/yaml");
      require("brace/mode/json");
      require("brace/mode/less");
      require("brace/snippets/json");
      require("brace/mode/lua");
      require("brace/snippets/lua");
      require("brace/mode/javascript");
      require("brace/snippets/javascript");
    },
    updateState(enabled) {
      if (enabled) {
        this.editor.enable();
      } else {
        this.editor.disable();
      }
    },
    toggleExportDialog() {
      this.showExportDialog = !this.showExportDialog;
    },
    toggleImportDialog() {
      this.showImportDialog = !this.showImportDialog;
    },
    copyExport() {
      this.$refs.exportTextarea.select();
      document.execCommand("Copy");
      this.$message.success("Copied!");
    },
    doImport() {
      try {
        this.editor.import(this.importData);
        this.$message.success("Imported!");
        this.importData = "";
        this.toggleImportDialog();
      } catch ({ message }) {
        this.$message.error(message);
      }
    },
  },

  mounted() {
    const oScript = document.createElement("script");
    oScript.type = "text/html";
    oScript.id = "tpl";
    document.body.appendChild(oScript);
  },
};
</script>

<style lang="scss" scoped>
@import "../app.scss";

.navbar {
  position: relative;
  z-index: 100;
  display: flex;
  height: $navbar-height;
  line-height: $navbar-height;
  padding: 0 13px;
  background-color: white;
  box-shadow: 0 2px 3px rgba($color: #000000, $alpha: 0.03);
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.12);
  .brand {
    font-size: 26px;
    color: $color-black;
  }
  .actions {
    display: flex;
    align-items: center;
    margin-left: auto;
    padding: 0 12px;
    & > * {
      margin-left: 15px;
    }
  }
  a {
    display: block;
    color: $color-gray;
    text-decoration: none;
    &:hover {
      color: $color-black;
    }
  }
}

.disable-select {
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.codeEditBox {
  border: 1px solid #dcdee2;
  height: 600px;
  width: 25%;
  position: relative;
}

.applyJson {
  position: absolute;
  top: -40px;
  right: 0;
}
</style>

<style lang="scss">
.navbar .el-dialog__body {
  padding: 0 24px 12px;

  textarea {
    display: block;
    width: 100%;
    border-radius: 3px;
    color: rgba(0, 0, 0, 0.7);
  }
}
</style>
