public with sharing class AccountController {

    @AuraEnabled
    public static String createAccount(
        String accountName,
        String phone,
        String industry,
        String website
    ) {
        try {
            Account acc = new Account(
                Name     = accountName,
                Phone    = phone,
                Industry = industry,
                Website  = website
            );
            insert acc;
            return 'Account created successfully!';
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}