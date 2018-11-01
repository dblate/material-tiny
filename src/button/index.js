/**
 * @file button
 * @author yuhui06
 * @date 2018/11/1
 */

import classnames from 'classnames';

Component({
    properties: {
        raised: {
            type: Boolean,
            value: false
        },
        unelevated: {
            type: Boolean,
            value: false
        },
        outlined: {
            type: Boolean,
            value: false
        },
        dense: {
            type: Boolean,
            value: false
        }
    },

    data: {
        classes: 'mdc-button'
    },

    lifetimes: {
        attached() {
            const classes = classnames(this.data.classes, {
                'mdc-button--raised': this.data.raised,
                'mdc-button--unelevated': this.data.unelevated,
                'mdc-button--outlined': this.data.outlined,
                'mdc-button--dense': this.data.dense
            });

            this.setData({classes});
        }
    },

    methods: {

    }
});
