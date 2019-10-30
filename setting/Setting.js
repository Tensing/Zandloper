define([
    'dojo/_base/declare',
    'jimu/BaseWidgetSetting',
    'dijit/form/NumberSpinner',
    'dojox/form/DropDownSelect',
    'dijit/_WidgetsInTemplateMixin'
],
    function (declare, BaseWidgetSetting, NumberSpinner, DropDownSelect, _WidgetsInTemplateMixin) {
        return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {
            baseClass: 'jimu-widget-zandloper-setting',
            startup: function () {
                this.inherited(arguments);
                if (!this.config) {
                    this.config = {};
                }
                this.setConfig(this.config);
            },
            setConfig: function (config) {
                this.config = config;
                let endSpinner = dijit.byId("endSpinner");
                let startSpinner = dijit.byId("startSpinner");
                let selectTimeUnit = dijit.byId("selectTimeUnit");

                if (config.end) {
                    endSpinner.setValue(config.end);
                } else {
                    endSpinner.setValue(-1);
                }

                if (config.start) {
                    startSpinner.setValue(config.start);
                } else {
                    startSpinner.setValue(1);
                }

                if (config.timeUnit) {
                    selectTimeUnit.set("value", config.timeUnit);
                } else {
                    selectTimeUnit.set("value", "M");
                }
            },

            getConfig: function () {

                this.config.start = dijit.byId("startSpinner").getValue();
                this.config.end = dijit.byId("endSpinner").getValue();
                this.config.timeUnit = dijit.byId("selectTimeUnit").get("value");

                return this.config;
            },
        });
    });