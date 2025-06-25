sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/model/json/JSONModel",
  "./model/models"
], function (UIComponent, JSONModel, models) {
  "use strict";

  return UIComponent.extend("ui5.walkthrough.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      try {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set up device model
        this.setModel(models.createDeviceModel(), "device");

        // initialize router
        this.getRouter().initialize();
      } catch (oError) {
        console.error("Component initialization failed:", oError);
      }
    }
  });
});