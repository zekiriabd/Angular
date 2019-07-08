"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserM = /** @class */ (function () {
    function UserM(IdUser, FirstName, LastName, Email) {
        if (IdUser === void 0) { IdUser = 0; }
        if (FirstName === void 0) { FirstName = ''; }
        if (LastName === void 0) { LastName = ''; }
        if (Email === void 0) { Email = ''; }
        this.IdUser = IdUser;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
    }
    return UserM;
}());
exports.UserM = UserM;
//# sourceMappingURL=UserM.js.map