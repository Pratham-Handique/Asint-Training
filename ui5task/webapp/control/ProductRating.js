sap.ui.define([
  "sap/ui/core/Control",
  "sap/m/RatingIndicator",
  "sap/m/Label",
  "sap/m/Button"
], function (Control, RatingIndicator, Label, Button) {
  "use strict";
  return Control.extend("ui5task.control.ProductRating", {
    metadata: {
      properties: { value: { type: "float", defaultValue: 0 } },
      aggregations: {
        _rating: { type: "sap.m.RatingIndicator", multiple: false, visibility: "hidden" },
        _label: { type: "sap.m.Label", multiple: false, visibility: "hidden" },
        _button: { type: "sap.m.Button", multiple: false, visibility: "hidden" }
      },
      events: {
        change: {
          parameters: { value: { type: "float" } }
        }
      }
    },

    init: function () {
      this.setAggregation("_rating", new RatingIndicator({
        value: this.getValue(),
        iconSize: "2rem",
        visualMode: "Half",
        liveChange: this._onRate.bind(this)
      }));
      this.setAggregation("_label", new Label({
        text: "{i18n>productRatingLabelInitial}"
      }).addStyleClass("sapUiTinyMargin"));
      this.setAggregation("_button", new Button({
        text: "{i18n>productRatingButton}",
        press: this._onSubmit.bind(this)
      }));
    },

    setValue: function (fValue) {
      this.setProperty("value", fValue, true);
      this.getAggregation("_rating").setValue(fValue);
    },

    _onRate: function (oEvent) {
      const fValue = oEvent.getParameter("value");
      this.setValue(fValue);
      const oBundle = this.getModel("i18n").getResourceBundle();
      this.getAggregation("_label").setText(
        oBundle.getText("productRatingLabelIndicator", [fValue, oEvent.getSource().getMaxValue()])
      ).setDesign("Bold");
    },

    _onSubmit: function () {
      const oBundle = this.getModel("i18n").getResourceBundle();
      this.getAggregation("_rating").setEnabled(false);
      this.getAggregation("_label").setText(oBundle.getText("productRatingLabelFinal"));
      this.getAggregation("_button").setEnabled(false);
      this.fireChange({ value: this.getValue() });
    },

    renderer: function (oRM, oControl) {
      oRM.write("<div");
      oRM.writeControlData(oControl);
      oRM.addClass("ui5taskProductRating");
      oRM.writeClasses();
      oRM.write(">");
      oRM.renderControl(oControl.getAggregation("_rating"));
      oRM.renderControl(oControl.getAggregation("_label"));
      oRM.renderControl(oControl.getAggregation("_button"));
      oRM.write("</div>");
    }
  });
});
