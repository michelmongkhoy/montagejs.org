montageDefine("b02206b","ui/component-blueprint.json",{exports:{blueprint_component_identifier:{prototype:"core/meta/property-blueprint",properties:{name:"identifier",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"string",enumValues:[],helpKey:""}},blueprint_component_element:{prototype:"core/meta/property-blueprint",properties:{name:"form",blueprint:{"@":"root"},cardinality:1,mandatory:!1,denyDelete:!1,readOnly:!1,valueType:"string",enumValues:[],helpKey:""}},root:{prototype:"core/meta/blueprint",properties:{name:"Component",blueprintModuleId:"ui/component-blueprint.json",prototypeName:"Component",customPrototype:!1,propertyBlueprints:[{"@":"blueprint_component_identifier"},{"@":"blueprint_component_element"}],propertyBlueprintGroups:{component:[{"@":"blueprint_component_identifier"},{"@":"blueprint_component_element"}]},propertyValidationRules:{}}}}})