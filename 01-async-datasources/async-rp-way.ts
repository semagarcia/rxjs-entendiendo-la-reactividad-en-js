// CodeMotion example
class UserAsync {
    private backendUserSrv;

    setName(name: string, cb: Function) {
        this.backendUserSrv.setUserName(name, cb);
    }

    setSurname(surname: string, cb: Function) {
        this.backendUserSrv.setUserSurname(surname, cb);
    }

    setAge(age: number, cb: Function) {
        this.backendUserSrv.setUserAge(age, cb);
    }
}