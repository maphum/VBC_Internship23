const configJodit = {
  zIndex: 0,
  readonly: false,
  placeholder: "",
  activeButtonsInReadOnly: ["source", "fullsize", "print", "about"],
  toolbarButtonSize: "middle",
  theme: "default",
  enableDragAndDropFileToEditor: true,
  saveModeInCookie: false,
  spellcheck: true,
  editorCssClass: false,
  triggerChangeEvent: true,
  height: 220,
  direction: "ltr",
  language: "vi",
  debugLanguage: false,
  i18n: "en",
  tabIndex: -1,
  toolbar: true,
  enter: "P",
  useSplitMode: false,
  colorPickerDefaultTab: "background",
  imageDefaultWidth: 100,
  removeButtons: [
    "source",
    "fullsize",
    "about",
    "outdent",
    "indent",
    "video",
    "print",
    "superscript",
    "subscript",
    "file",
    "cut",
    "selectall",
  ],
  disablePlugins: ["paste", "stat"],
  events: {},
  textIcons: false,
  uploader: {
    insertImageAsBase64URI: true,
  },
  showXPathInStatusbar: false,
};

export { configJodit };