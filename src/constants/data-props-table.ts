import { TranslationKey } from "../i18n/translations";

export const dataPropsTable = [
  {
    name: "isOpen",
    type: "boolean",
    default: "false",
    descriptionKey: "propsTable.isOpen.description" as TranslationKey,
  },
  {
    name: "onClose",
    type: "() => void",
    default: "-",
    descriptionKey: "propsTable.onClose.description" as TranslationKey,
  },
  {
    name: "title",
    type: "string",
    default: "-",
    descriptionKey: "propsTable.title.description" as TranslationKey,
  },
  {
    name: "size",
    type: "'sm' | 'md' | 'lg' | 'xl'",
    default: "'md'",
    descriptionKey: "propsTable.size.description" as TranslationKey,
  },
  {
    name: "position",
    type: "'center' | 'top' | 'bottom'",
    default: "'center'",
    descriptionKey: "propsTable.position.description" as TranslationKey,
  },
  {
    name: "hasOverlay",
    type: "boolean",
    default: "true",
    descriptionKey: "propsTable.hasOverlay.description" as TranslationKey,
  },
  {
    name: "showCloseButton",
    type: "boolean",
    default: "true",
    descriptionKey: "propsTable.showCloseButton.description" as TranslationKey,
  },
  {
    name: "closeOnOverlayClick",
    type: "boolean",
    default: "true",
    descriptionKey:
      "propsTable.closeOnOverlayClick.description" as TranslationKey,
  },
  {
    name: "closeOnEsc",
    type: "boolean",
    default: "true",
    descriptionKey: "propsTable.closeOnEsc.description" as TranslationKey,
  },
];
