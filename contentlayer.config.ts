import { defineDocumentType, makeSource } from "contentlayer/source-files";

const ExampleDocument = defineDocumentType(() => ({
  name: "Example",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
  },
}));

const contentLayerConfig = makeSource({
  contentDirPath: "content",
  documentTypes: [ExampleDocument],
});

export default contentLayerConfig;
