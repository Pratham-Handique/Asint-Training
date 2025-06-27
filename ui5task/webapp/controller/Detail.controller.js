sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent",
  "sap/m/MessageToast"
], function (Controller, UIComponent, MessageToast) {
  "use strict";

  return Controller.extend("ui5task.controller.Detail", {
    onInit: function () {
      this.getOwnerComponent()
        .getRouter()
        .getRoute("detail")
        .attachPatternMatched(this._onRouteMatched, this);
    },

    _onRouteMatched: function (oEvent) {
      this._taskId = oEvent.getParameter("arguments").taskId;

      const oModel = this.getView().getModel();
      const aTasks = oModel.getProperty("/tasks");

      const iIndex = aTasks.findIndex((task) => task.id === this._taskId);

      if (iIndex !== -1) {
        this._taskIndex = iIndex;

        this.getView().bindElement({
          path: "/tasks/" + iIndex
        });
      } else {
        console.warn("Task not found with ID:", this._taskId);
      }
    },

    onNavBack: function () {
      UIComponent.getRouterFor(this).navTo("master");
    },

    onUpdate: function () {
      const oModel = this.getView().getModel();
      const aTasks = oModel.getProperty("/tasks");

      const sTitle = this.byId("titleInput").getValue();
      const sDesc = this.byId("descInput").getValue();

      if (this._taskIndex !== undefined) {
        aTasks[this._taskIndex].title = sTitle;
        aTasks[this._taskIndex].description = sDesc;
        oModel.setProperty("/tasks", aTasks);
      }
    },

    onDelete: function () {
      const oModel = this.getView().getModel();
      let aTasks = oModel.getProperty("/tasks");

      aTasks = aTasks.filter((task) => task.id !== this._taskId);
      oModel.setProperty("/tasks", aTasks);

      UIComponent.getRouterFor(this).navTo("master");
    },

    onRatingChange: function (oEvent) {
      const fValue = oEvent.getParameter("value");

      // Show rating message
      const oBundle = this.getView().getModel("i18n").getResourceBundle();
      MessageToast.show(oBundle.getText("ratingConfirmation", [fValue]));

      // Persist rating in model
      const oModel = this.getView().getModel();
      const aTasks = oModel.getProperty("/tasks");

      if (this._taskIndex !== undefined) {
        aTasks[this._taskIndex].rating = fValue;
        oModel.setProperty("/tasks", aTasks);
      }
    }
  });
});
