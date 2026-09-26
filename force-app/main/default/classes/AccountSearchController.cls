public with sharing class AccountSearchController {
  @auraEnabled(Cacheable=true)
  public static Account getAccountDetails(String accountId) {
    List<Account> account = [
      SELECT Id, Name, Type, Industry, AnnualRevenue
      FROM Account
      WHERE Id = :accountId
      LIMIT 1
    ];
    if (account.isEmpty()) {
      throw new MyException('Account is not available in the System');
    }

    return account[0];
  }

  public class MyException extends Exception {
  }
}
