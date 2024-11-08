// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var ExampleDocument = defineDocumentType(() => ({
  name: "Example",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true }
  }
}));
var contentLayerConfig = makeSource({
  contentDirPath: "content",
  documentTypes: [ExampleDocument]
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-JXVCNMWU.mjs.map
