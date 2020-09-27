'use strict';
/**
 * Email Serivce to perform data analysis on emails
 * AUTHOR: Quade Kayle
 */
const EmailService = function() {

    //Standard for email validation
    const RFC5322Standard = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    /**
     * Count unique emails based on Gmail account matching
     * @param {Array} emails
     * @returns {number} uniqueEmails
     */
    this.countUniqueEmails = (emails) => {
        let uniqueEmails = [];
        let email = '';
        for(let i = 0; i < emails.length; i++){
            const serializedEmail = this.getGmailAccount(emails[i]);
            if(!uniqueEmails.includes(serializedEmail) && RFC5322Standard.test(serializedEmail)){
                uniqueEmails.push(serializedEmail);
            }
        }
        return uniqueEmails.length;
    }

    /**
     * Returns email serialized for gmail based on given prompt:
     * Specifically: Gmail will ignore the placement of "." in the username. And it will ignore any portion of the username after a "+".
     * @param {string} email
     * @returns {string} serialized email
     */
    this.getGmailAccount = (email) =>{
        const splitEmail = email.split('@');
        let username = splitEmail[0];
        username = username.replace(/\./g, ''); //replace all periods in username
        username = username.includes('+') ? username.substring(0, username.indexOf('+')) : username; //remove all characters after + if exists
        return username + '@' + splitEmail[1];
    }


};

exports.EmailService = EmailService;