import type { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getHelloWorldReport = () => {
  const docDefinition: TDocumentDefinitions = {
    content: ['Hola Mundo'],
  };

  return docDefinition;
};
