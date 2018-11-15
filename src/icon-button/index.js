/**
 * @file button
 * @author yuhui06
 * @date 2018/11/1
 */

import {MDCIconButtonToggleFoundation} from '@material/icon-button';

Component({
    properties: {

    },

    data: {
        classes: 'mdc-icon-button'
    },

    lifetimes: {
        attached() {
            this.foundation = new MDCIconButtonToggleFoundation({
                addClass: className => {
                    let classes = this.data.classes;
                    if (classes.indexOf(className) === -1) {
                        classes = classes + ' ' + className;
                        this.setData({classes});
                    }
                },
                removeClass: className => {
                    let classes = this.data.classes;
                    if (classes.indexOf(className) > -1) {
                        classes = classes.replace(className, '');
                        this.setData({classes});
                    }
                },
                hasClass: className => (this.data.classes.indexOf(className) > -1),
                setAttr: (attrName, attrValue) => {},
                notifyChange: evtData => {}
            });

            this.foundation.init();
        }
    },

    methods: {
        handleTap() {
            this.foundation.handleClick();
        }
    }
});
