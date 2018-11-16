import { createTempate } from "./template";

interface   IFileImport {
  imports: Array<{
      importName: string,
      componentName: string
  }>;
  path: string;
}

function generate(entries: IFileImport[]): string {
  return render(entries);
}

const render: (model: IFileImport[]) => string = createTempate(
`<#~ it :reExport #>` +

`/* <#= reExport.path #> */\n\n` +
`<#~ reExport.imports :entry #>` +
`// import { <#= entry.importName #> as <#= entry.importName #> } from '<#= reExport.path #>';\n` +
`// Vue.component('<#= entry.componentName #>', <#= entry.importName #>);\n\n` +
`<#~#>` +
`\n` +

`<#~#>`
);

export default generate;
export {
  IFileImport
};
