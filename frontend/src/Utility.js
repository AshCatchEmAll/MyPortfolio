class Utility {
    static randomInt(num1, num2) {
        return Math.round(num1 + (Math.random() * Math.abs(num1 - num2)));
    }
}

module.exports = Utility;