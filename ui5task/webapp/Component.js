sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel", 
    "ui5task/model/models"
  ],
  function (UIComponent, JSONModel, models) {
    "use strict";

    return UIComponent.extend("ui5task.Component", {
      metadata: {
        manifest: "json"
      },

      init: function () {
        // Call base component init
        UIComponent.prototype.init.apply(this, arguments);

        this.getRouter().initialize();
      }
    });
  }
);
