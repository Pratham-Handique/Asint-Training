sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageToast",
  "sap/ui/core/Fragment"
], function (Controller, Filter, FilterOperator, MessageToast, Fragment) {
  "use strict";

  return Controller.extend("ui5.walkthrough.controller.Overview", {
    onInit: function () {
      // Initialize table reference with null check
      this._oTable = this.byId("ordersTable");
      if (!this._oTable) {
        console.error("Table with ID 'ordersTable' not found");
        return;
      }

      // Initialize router with error handling
      try {
        this.getOwnerComponent()
          .getRouter()
          .getRoute("overview")
          .attachPatternMatched(this._onRouteMatched, this);
      } catch (error) {
        console.error("Router initialization failed:", error);
      }

      // Show initialization message
      MessageToast.show("Overview loaded", {
        duration: 2000,
        at: "center center"
      });
    },

    _onRouteMatched: function () {
      // Refresh data with null checks
      if (this._oTable && this._oTable.getBinding("items")) {
        try {
          this._oTable.getBinding("items").refresh();
        } catch (error) {
          console.error("Failed to refresh table data:", error);
        }
      }
    },

    onSearch: function (oEvent) {
      // Add null checks for table and binding
      if (!this._oTable || !this._oTable.getBinding("items")) {
        console.error("Table or binding not available");
        return;
      }

      var sQuery = oEvent.getParameter("newValue");
      var aFilters = [];
      
      if (sQuery) {
        aFilters.push(new Filter("CustomerID", FilterOperator.Contains, sQuery));
      }
      
      try {
        this._oTable.getBinding("items").filter(aFilters);
      } catch (error) {
        console.error("Filtering failed:", error);
      }
    },

    onAdd: function () {
      try {
        var oModel = this.getView().getModel();
        if (!oModel) {
          throw new Error("Model not available");
        }

        var oContext = oModel.createEntry("/Orders", {
          properties: { 
            CustomerID: "", 
            OrderDate: new Date().toISOString().slice(0, 10) 
          }
        });

        if (!oContext) {
          throw new Error("Failed to create new entry");
        }

        this.getOwnerComponent()
          .getRouter()
          .navTo("detail", { 
            OrderID: oContext.getProperty("OrderID") 
          });
      } catch (error) {
        console.error("Add operation failed:", error);
        MessageToast.show("Failed to create new order", {
          duration: 3000,
          at: "center center"
        });
      }
    },

    onDelete: function () {
      try {
        var aContexts = this._oTable.getSelectedContexts();
        if (!aContexts || aContexts.length === 0) {
          MessageToast.show("No items selected", {
            duration: 2000,
            at: "center center"
          });
          return;
        }

        var oModel = this.getView().getModel();
        if (!oModel) {
          throw new Error("Model not available");
        }

        aContexts.forEach(function (oCtx) {
          if (oCtx && oCtx.getPath()) {
            oModel.remove(oCtx.getPath());
          }
        });

        MessageToast.show("Selected items deleted", {
          duration: 2000,
          at: "center center"
        });
      } catch (error) {
        console.error("Delete operation failed:", error);
        MessageToast.show("Failed to delete items", {
          duration: 3000,
          at: "center center"
        });
      }
    },

    onRowPress: function (oEvent) {
      try {
        var oListItem = oEvent.getParameter("listItem");
        if (!oListItem) {
          throw new Error("List item not found");
        }

        var oCtx = oListItem.getBindingContext();
        if (!oCtx) {
          throw new Error("Binding context not available");
        }

        var sOrderID = oCtx.getProperty("OrderID");
        if (!sOrderID) {
          throw new Error("OrderID not found");
        }

        this.getOwnerComponent()
          .getRouter()
          .navTo("detail", { 
            OrderID: sOrderID 
          });
      } catch (error) {
        console.error("Navigation failed:", error);
        MessageToast.show("Failed to navigate to details", {
          duration: 3000,
          at: "center center"
        });
      }
    }
  });
});