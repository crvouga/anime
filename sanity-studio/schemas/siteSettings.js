export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // what is this? https://www.sanity.io/docs/create-a-link-to-a-single-edit-page-in-your-main-document-type-list
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
    },
    {
      name: "description",
      title: "Site Description",
      type: "text",
    },
  ],
};
