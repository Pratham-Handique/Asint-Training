sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (Controller) {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.Detail", {
    onInit: function () {
      var oRouter = this.getOwnerComponent().getRouter();
      oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
    },

    _onObjectMatched: function (oEvent) {
      var sOrderID = oEvent.getParameter("arguments").OrderID;
      this.getView().bindElement({ path: "/Orders('" + sOrderID + "')" });
    },

    onNavBack: function () {
      window.history.back();
    },

    onSave: function () {
      var oModel = this.getView().getModel();
      var sPath = this.getView().getBindingContext().getPath();
      var oData = this.getView().getModel().getProperty(sPath);
      oModel.update(sPath, oData);
      this.onNavBack();
    }
  });
});