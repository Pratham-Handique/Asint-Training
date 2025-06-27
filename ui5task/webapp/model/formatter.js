// webapp/model/formatter.js
sap.ui.define([], function () {
  "use strict";

  return {
    toUpperCase: function (sText) {
      return sText ? sText.toUpperCase() : "";
    },

    shortDescription: function (sText) {
      if (!sText) return "";
      return sText.length > 20 ? sText.substr(0, 20) + "..." : sText;
    },

    formatTitleWithId: function (sTitle, sId) {
      return sId ? `#${sId} - ${sTitle}` : sTitle;
    }
  };
});