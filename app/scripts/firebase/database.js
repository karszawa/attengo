import firebase from './firebase';

const DB = firebase.database();

export const database = {
    pushRecord: (uid, data) => {
        DB.ref(`users/${uid}/records`).push(data).then();
    },

    updateRecord: (uid, recordId, data) => {
        DB.ref(`users/${uid}/records/${recordId}`).update(data).then();
    }
};

export const TIMESTAMP = firebase.database.ServerValue.TIMESTAMP;
