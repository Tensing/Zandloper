///////////////////////////////////////////////////////////////////////////
// Copyright © 2019 Tensing. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(['dojo/_base/declare',
    'jimu/BaseWidget',
    'dijit/form/DateTextBox',
    'dijit/_WidgetsInTemplateMixin',
    'moment/moment'],
    function (declare, BaseWidget, DateTextBox, _WidgetsInTemplateMixin, moment ) {
        //To create a widget, you need to derive from BaseWidget.

        return declare([BaseWidget, _WidgetsInTemplateMixin], {
            // Custom widget code goes here

            baseClass: 'jimu-widget-zandloper',

            //this property is set by the framework when widget is loaded.
            //name: 'CustomWidget',


            //methods to communication with app container:

            postCreate: function () {
                this.inherited(arguments);
                console.log('postCreate');
            },

            startup: function () {
                this.inherited(arguments);
                var d = moment();
                zandloperDate.value = d.format("DD-MM-YYYY");
                this.publishData({
                    message: d.format("DD-MM-YYYY"),
                    config: this.config
                });
                console.log('startup');
            },

            onOpen: function () {
                console.log('onOpen');
            },

            onClose: function () {
                console.log('onClose');
            },

            onMinimize: function () {
                console.log('onMinimize');
            },

            onMaximize: function () {
                console.log('onMaximize');
            },

            onSignIn: function (credential) {
                /* jshint unused:false*/
                console.log('onSignIn');
            },

            onSignOut: function () {
                console.log('onSignOut');
            },

            onPositionChange: function () {
                console.log('onPositionChange');
            },

            resize: function () {
                console.log('resize');
            },

            //methods to communication between widgets:
            _onDateChange: function (value) {
                var d = moment(value);
                this.publishData({
                    message: d.format("DD-MM-YYYY"),
                    config: this.config
                });
                console.log('_onDateChange');
            },

            onReceiveData: function (name, widgetId, data) {
                //filter out messages
                if (name !== 'TimeSliderPlus') {
                    return;
                }

                if (data.message === "On showTimeSlider") {
                    dijit.byId(zandloperDate.id).set('disabled', true);
                }


                if (data.message === "On closeTimeSlider") {
                    dijit.byId(zandloperDate.id).set('disabled', false);
                }
            }
        });
    });