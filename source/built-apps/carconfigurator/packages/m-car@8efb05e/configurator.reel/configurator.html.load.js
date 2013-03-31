montageDefine("8efb05e","configurator.reel/configurator.html",{text:'<!doctype html>\n\n<html>\n<head>\n    <meta http-equiv=Content-Type content="text/html; charset=utf-8">\n    <title>Configurator</title>\n\n    <link rel=stylesheet type="text/css" href=configurator.css>\n\n    <script type="text/montage-serialization">{"owner":{"properties":{"element":{"#":"configurator"},"bodyColorSection":{"#":"bodyColorSection"},"tridionColorSection":{"#":"tridionColorSection"},"interiorSection":{"#":"interiorSection"}}},"selectedBodyColorName":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"selectedBodyColorName"}},"bindings":{"value":{"<-":"@owner.vehicle.bodyColor.name"}}},"selectedBodyColorCost":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"selectedBodyColorCost"}},"bindings":{"value":{"<-":"@owner.vehicle.bodyColor.cost"}}},"bodyColorRepetition":{"prototype":"montage/ui/repetition.reel","properties":{"element":{"#":"bodyColorRepetition"},"isSelectionEnabled":true},"bindings":{"contentController":{"<-":"@owner.bodyColorController"}}},"bodyColorSwatch":{"prototype":"vehicle-config/ui/color-swatch.reel","properties":{"element":{"#":"bodyColorSwatch"}},"bindings":{"color":{"<-":"@bodyColorRepetition.objectAtCurrentIteration"}}},"customColorCondition":{"prototype":"montage/ui/condition.reel","properties":{"element":{"#":"customColorCondition"},"removalStrategy":"hide"},"bindings":{"condition":{"<-":"@owner.customColorSelected"}}},"customColor":{"prototype":"vehicle-config/ui/input-color.reel","properties":{"element":{"#":"customColor"}},"bindings":{"value":{"<->":"@owner.vehicle.customBodyColor.hex"}}},"selectedTridionColorName":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"selectedTridionColorName"}},"bindings":{"value":{"<-":"@owner.vehicle.tridionColor.name"}}},"selectedTridionColorCost":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"selectedTridionColorCost"}},"bindings":{"value":{"<-":"@owner.vehicle.tridionColor.cost"}}},"tridionColorRepetition":{"prototype":"montage/ui/repetition.reel","properties":{"element":{"#":"tridionColorRepetition"},"isSelectionEnabled":true},"bindings":{"contentController":{"<-":"@owner.tridionColorController"}}},"tridionColorSwatch":{"prototype":"vehicle-config/ui/color-swatch.reel","properties":{"element":{"#":"tridionColorSwatch"}},"bindings":{"color":{"<-":"@tridionColorRepetition.objectAtCurrentIteration"}}},"interiorRepetition":{"prototype":"montage/ui/repetition.reel","properties":{"element":{"#":"interiorRepetition"},"isSelectionEnabled":true},"bindings":{"contentController":{"<-":"@owner.interiorController"}}},"interiorColorSwatch":{"prototype":"vehicle-config/ui/color-swatch.reel","properties":{"element":{"#":"interiorColorSwatch"}},"bindings":{"color":{"<-":"@interiorRepetition.objectAtCurrentIteration"}}},"selectedInteriorName":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"selectedInteriorName"}},"bindings":{"value":{"<-":"@owner.vehicle.interior.name"}}},"selectedInteriorCost":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"selectedInteriorCost"}},"bindings":{"value":{"<-":"@owner.vehicle.interior.cost"}}},"interiorOptionRepetition":{"prototype":"montage/ui/repetition.reel","properties":{"element":{"#":"interiorOptionRepetition"}},"bindings":{"contentController":{"<-":"@owner.interiorOptionsController"}}},"interiorOptionCheckbox":{"prototype":"montage/ui/input-checkbox.reel","properties":{"element":{"#":"interiorOptionCheckbox"}},"bindings":{"checked":{"<->":"@interiorOptionRepetition.objectAtCurrentIteration.chosen"}}},"interiorOptionLabel":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"interiorOptionLabel"}},"bindings":{"value":{"<-":"@interiorOptionRepetition.objectAtCurrentIteration.name"}}},"interiorOptionCost":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"interiorOptionCost"}},"bindings":{"value":{"<-":"@interiorOptionRepetition.objectAtCurrentIteration.cost"}}},"basePrice":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"basePrice"}},"bindings":{"value":{"<-":"@owner.vehicle.basePrice"}}},"configuredPrice":{"prototype":"montage/ui/dynamic-text.reel","properties":{"element":{"#":"configuredPrice"}},"bindings":{"value":{"<-":"@owner.vehicle.configuredPrice"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=configurator class=Configurator>\n\n        <div data-montage-id=scroller class=scroller>\n\n            <section data-montage-id=bodyColorSection class="ConfiguratorGroup bodyColor">\n                <h3>Body Color</h3>\n                <p class=selectedInfo>\n                    <span data-montage-id=selectedBodyColorName class=name></span>\n                    $<span data-montage-id=selectedBodyColorCost class=price></span>\n                </p>\n                <ul data-montage-id=bodyColorRepetition class="options colorPicker">\n                    <li data-montage-id=bodyColorSwatch></li>\n                </ul>\n                <div class=customColorPicker data-montage-id=customColorCondition>\n                    <input type=color data-montage-id=customColor class=customColor>\n                </div>\n            </section>\n\n            <section data-montage-id=tridionColorSection class=ConfiguratorGroup>\n                <h3>Frame Color</h3>\n                <p class=selectedInfo>\n                    <span data-montage-id=selectedTridionColorName class=name></span>\n                    $<span data-montage-id=selectedTridionColorCost class=price></span>\n                </p>\n                <ul data-montage-id=tridionColorRepetition class="options colorPicker">\n                    <li data-montage-id=tridionColorSwatch></li>\n                </ul>\n\n            </section>\n\n            <section data-montage-id=interiorSection class=ConfiguratorGroup>\n                <h3>Interior</h3>\n                <p class=selectedInfo>\n                    <span data-montage-id=selectedInteriorName class=name></span>\n                    $<span data-montage-id=selectedInteriorCost class=price></span>\n                </p>\n                <ul data-montage-id=interiorRepetition class="options colorPicker">\n                    <li data-montage-id=interiorColorSwatch></li>\n                </ul>\n            </section>\n\n            <section class=ConfiguratorGroup>\n                <ul data-montage-id=interiorOptionRepetition class=options>\n                    <li><label><input type=checkbox data-montage-id=interiorOptionCheckbox> <span data-montage-id=interiorOptionLabel></span></label>\n                    <span class=priceHolder>$<span data-montage-id=interiorOptionCost></span></span></li>\n                </ul>\n            </section>\n\n        </div>\n\n        <section class="ConfiguratorGroup PricingGroup">\n            <h3>Price</h3>\n            <p>Base <span class=priceHolder>$<span data-montage-id=basePrice class=price></span></span></p>\n            <p>Configured <span class=priceHolder>$<span data-montage-id=configuredPrice class="price price-configured"></span></span></p>\n        </section>\n\n    </div>\n</body>\n</html>'})