sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/ui/model/Sorter",
  "ui5task/model/formatter"
], function (Controller, Filter, FilterOperator, Sorter, formatter) {
  "use strict";

  return Controller.extend("ui5task.controller.Master", {
    formatter: formatter,
    _bSortAsc: true,

    onInit: function () {},

    onSelect: function (oEvent) {
      const path = oEvent.getSource().getBindingContext().getPath();
      const taskId = this.getView().getModel().getProperty(path + "/id");
      this.getOwnerComponent().getRouter().navTo("detail", { taskId });
    },

    onAdd: function () {
      const oModel = this.getView().getModel();
      const aTasks = oModel.getProperty("/tasks");
      const newTask = {
        id: String(aTasks.length + 1),
        title: "New Task",
        description: "..."
      };
      aTasks.push(newTask);
      oModel.setProperty("/tasks", aTasks);
    },

    onSearch: function (oEvent) {
      const sQuery = oEvent.getParameter("newValue") || oEvent.getParameter("query") || "";
      const aFilters = [];

      if (sQuery) {
        aFilters.push(
          new Filter({
            filters: [
              new Filter("title", FilterOperator.Contains, sQuery),
              new Filter("description", FilterOperator.Contains, sQuery)
            ],
            and: false
          })
        );
      }

      const oList = this.byId("taskList");
      const oBinding = oList.getBinding("items");
      oBinding.filter(aFilters);
    },

    onSort: function () {
      const oList = this.byId("taskList");
      const oBinding = oList.getBinding("items");

      const oSorter = new Sorter("title", !this._bSortAsc);
      this._bSortAsc = !this._bSortAsc;

      oBinding.sort(oSorter);
    }
  });
});
