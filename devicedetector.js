/**
 * deviceDetector - Detects the type of device based on the user agent
 * Author: ArenaDelMobile
 * License: Custom
 */

const deviceDetector = {
    /**
     * Returns the detected device type as a string.
     * Possible values: 'mobile', 'tablet', 'desktop', 'unknown'
     * @returns {string}
     */
    getDeviceType() {
        const ua = navigator.userAgent.toLowerCase();

        if (/mobile|android|iphone|ipod|blackberry|iemobile|opera mini/.test(ua)) {
            return 'mobile';
        }

        if (/ipad|tablet|kindle|playbook/.test(ua)) {
            return 'tablet';
        }

        if (/mac|windows|linux/.test(ua)) {
            return 'desktop';
        }

        return 'unknown';
    },

    /**
     * Logs the device type to the console.
     */
    logDeviceType() {
        console.log(`[deviceDetector] Device type: ${this.getDeviceType()}`);
    }
};

// Example usage:
// deviceDetector.logDeviceType();
// const type = deviceDetector.getDeviceType();
// console.log(type); // 'mobile', 'tablet', 'desktop', or 'unknown'

module.exports = deviceDetector;
