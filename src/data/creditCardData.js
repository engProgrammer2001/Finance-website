const CreditCardData = [
  {
    id: 1,
    name: "SBI",
    details: {
      CardType: "Premium",
      Benefits: "Rewards",
      SourcingCriteria: {
        AgeCriteria: "21 to 60 years",
        EmploymentType: "Salaried",
        MinMonthlyIncome: "25,000",
      },
      Fees: {
        FirstYearFee: "499",
        RenewalFee: "499",
        RenewalFeeWaiver: "On spends of 1 Lakh or more in the previous year",
      },
      RewardsAndCashback: {
        UsageBenefits: "5% cashback on groceries and movies",
        OnlineSpends: "10x rewards on online shopping",
        AtStores: "Accelerated rewards on partner stores",
      },
      ExtraCategoryBenefits: "NA",
      Fuel: "1% fuel surcharge waiver",
    },
  },
  {
    id: 2,
    name: "HSBC",
    details: {
      CardType: "Super Premium",
      Benefits: "Cashback",
      SourcingCriteria: {
        AgeCriteria: "18 to 65 Years",
        EmploymentType: "Salaried",
        MinMonthlyIncome: "33,000",
      },
      Fees: {
        FirstYearFee: "999",
        RenewalFee: "999",
        RenewalFeeWaiver: "Reversed on spends of 2 Lacs",
      },
      WelcomeBenefits:
        "Amazon vouchers worth 1000 on min. transaction of 10K within first 30 days (Valid from 1st Jan 2024 till 30 June 2024)",
      ComplimentaryLoungeAccess:
        "4 Complimentary Domestic Lounge visits per year (1 per quarter)",
      RewardsAndCashback: {
        UsageBenefits:
          "1.5% unlimited cashback on all other spends (exclusions apply)",
        OnlineSpends:
          "1.5% Cashback on online spends, BookMyShow Saturday Offer - BOGO offer on movie tickets up to 250 (Valid till 31 March 2024), 30% instant discount on EazyDiner (Valid till 31 March 2024)",
      },
      MilestoneBenefits:
        "5X Rewards on spends of 400,000 in an anniversary year. Up to a maximum of 15000 accelerated reward points",
      ExtraCategoryBenefits:
        "Air miles conversion on InterMiles, British Airways and Singapore Airlines",
      Fuel: "Up to 3,000 annual savings on fuel surcharge",
    },
  },
  {
    id: 3,
    name: "SCB",
    details: {
      CardType: "Premium",
      Benefits: "Rewards",
      SourcingCriteria: {
        AgeCriteria: "21 to 60 years",
        EmploymentType: "Salaried",
        MinMonthlyIncome: "25,000",
      },
      Fees: {
        FirstYearFee: "350",
        RenewalFee: "350",
        RenewalFeeWaiver: "On spends of 50K in previous year",
      },
      ComplimentaryLoungeAccess:
        "1 Complimentary domestic lounge access per calendar quarter, 2 Complimentary international lounge access per year",
      RewardsAndCashback: {
        UsageBenefits:
          "5 RP for every 150 spent on dining and fuel, 1 RP on every 150 spent on all other categories",
        OnlineSpends:
          "Flat 20% discount on domestic & International flight booking, 10% off on domestic & international flight bookings, 10x rewards on every 100 spent for booking tickets at standalone hotel and airline websites/apps/outlets, 125 off on bus ticket bookings (On min. ticket booking of 500)",
        AtStores: "Accelerated reward points on specific merchants",
      },
      ExtraCategoryBenefits:
        "1 RP on every 150 spent on Government & Insurance categories, 4000 RP on payment of Joining Fees",
      Fuel: "1% Fuel Surcharge waiver on all fuel spends (min. transaction is 400)",
      RewardPoints: "2 RP on every 100 spent, 2 Reward Points = 0.50",
    },
  },
  {
    id: 4,
    name: "Axis Bank MY ZONE",
    details: {
      CardType: "Entry Level",
      Benefits: "Shopping",
      SourcingCriteria: {
        AgeCriteria: "18 to 70 years",
        EmploymentType: "Salaried / Self-Employed",
        MinMonthlyIncome: "15,000",
      },
      Fees: {
        FirstYearFee: "Lifetime Free",
        RenewalFee: "Lifetime Free",
        RenewalFeeWaiver: "NA",
      },
      WelcomeBenefits: "NA",
      LoungeAccess: "4 Domestic lounge visits per year (1 per quarter)",
      RewardsAndCashback: {
        UsageBenefits:
          "10 EDGE rewards per Rs. 100 spent on Zomato, BigBasket, Myntra, UrbanCompany",
        OnlineSpends: "10x rewards on selected merchants",
        MilestoneBonus: "1500 EDGE Rewards on spends of Rs. 30,000 per month",
      },
      ExtraCategoryBenefits:
        "Sonyliv Premium annual subscription worth Rs. 3,999 on first spend in 30 days of card issuance",
      Fuel: "1% fuel surcharge waiver on transactions between Rs. 400 to Rs. 4,000",
    },
  },
  {
    id: 5,
    name: "IDFC FIRST",
    details: {
      CardType: "Classic",
      Benefits: "Cashback, Rewards",
      SourcingCriteria: {
        AgeCriteria: "Salaried: 21 to 60 years | Self-Employed: 25 to 60 years",
        EmploymentType: "Salaried / Self-Employed",
        MinMonthlyIncome: "25K / 5 Lacs ITR p.a",
        "OBC Limit": "30K",
      },
      Fees: {
        FirstYearFee: "Lifetime Free",
        RenewalFee: "Lifetime Free",
      },
      WelcomeBenefits: {
        Vouchers:
          "Rs. 500 worth of vouchers on spending Rs. 5000 or more in 30 days of card generation",
        Cashback:
          "5% cashback on EMI transaction done within 30 days (Up to Rs. 1000)",
      },
      Complimentary: {
        LoungeAccess: "4 complimentary Railway lounge visits per quarter",
        Restaurant: "Up to 20% discount at 1500+ restaurants",
        RoadAssistance: "Complimentary Roadside Assistance worth Rs. 1,399",
      },
      Insurance: {
        PersonalAccidentCover:
          "Rs. 2 Lacs on min. one txn in the previous month",
        LostCardLiability: "Rs. 25,000",
      },
      RewardsAndCashback: {
        UsageBenefits:
          "25% discount on movie tickets once a month up to Rs. 100 on Paytm mobile app",
        AtStores:
          "300+ Merchant offers, All year long! Up to 15% discount at 3000+ Health & Wellness outlets",
        MilestoneBonus:
          "10X RPs on all incremental spends above Rs. 20K/ mo. and on your birthday",
      },
      ExtraCategoryBenefits:
        "Forex mark-up starting at 3.5% on all international spends",
      Fuel: "Fuel Surcharge Waiver Up to Rs. 200 per month (only on TXN of Rs. 200 to Rs. 5000)",
      RedemptionValue: "1 Reward Point = Rs. 0.25 (on Rs. 150 spent)",
      OtherBenefits:
        "Interest-free ATM Cash Withdrawal for up to 48 days (Cash Advance Fee of only Rs. 250 per transaction)",
    },
  },
  {
    id: 6,
    name: "Yes Bank",
    details: [
      {
        CardName: "Yes First Exclusive",
        CardType: "Super Premium",
        SourcingCriteria: {
          AgeCriteria:
            "Salaried: 21 to 60 Years | Self-Employed: 21 to 70 Years",
          EmploymentType: "Salaried / Self-Employed",
          MinMonthlyIncome: "2 Lacs / 18 Lacs ITR p.a.",
          "OBC Limit": "8 Lacs and above",
        },
        Fees: {
          FirstYearFee: "999",
          RenewalFee: "999",
          AnnualFeeWaiver: "On spends of 3 Lacs within an anniversary year",
          JoiningFeeWaiver: "On spends of 40K within 30 days of card issuance",
        },
        ComplimentaryMemberships: {
          AirportLoungeAccess:
            "6 Complimentary Airport Lounge access at airports outside India per quarter for Primary card members",
          Golf: "4 rounds of Green Fee waiver & 12 Complimentary Golf lessons in a year at select Golf courses in India",
        },
        RewardsAndCashback: {
          UsageBenefits:
            "24 Reward Points per 200 spent on Travel Agencies & Tour Operators, Dining, Domestic Airlines & Groceries",
          OnlineSpends: "25% Discount Offer on BookMyShow (Capped at 250)",
        },
        Fuel: "1% Fuel surcharge waiver at all fuel stations across India for transaction between 400 to 5,000",
        OtherBenefits: {
          ForeignCurrencyMarkup:
            "Preferential Foreign Currency Markup of 1.75% only",
          CreditShield:
            "Cover for outstanding Credit Card dues in case of accidental death of Primary Cardmember",
        },
      },
      {
        CardName: "Yes Premia",
        CardType: "Premium",
        SourcingCriteria: {
          AgeCriteria:
            "Salaried: 21 to 60 Years | Self-Employed: 21 to 70 Years",
          EmploymentType: "Salaried / Self-Employed",
          MinMonthlyIncome: "1 Lacs / 9 Lacs ITR p.a.",
          "OBC Limit": "2.4 Lacs and above",
        },
        Fees: {
          FirstYearFee: "999",
          RenewalFee: "999",
          AnnualFeeWaiver: "On spends of 2 Lacs within an anniversary year",
          JoiningFeeWaiver: "On spends of 10K within 30 days of card issuance",
        },
        ComplimentaryMemberships: {
          AirportLoungeAccess:
            "3 complimentary Airport Lounge access per calendar quarter at airports in India",
          Golf: "4 rounds of Green Fee waiver & 12 Complimentary Golf lessons in a year at select Golf courses in India",
        },
        RewardsAndCashback: {
          UsageBenefits:
            "12 Reward Points per 200 spent on travel and dining categories",
          OnlineSpends: "25% Discount on BookMyShow (Capped at 250)",
        },
        Fuel: "1% Fuel surcharge waiver at all fuel stations across India for transaction between 400 to 5,000",
        OtherBenefits: {
          ForeignCurrencyMarkup:
            "Preferential Foreign Currency Markup of 2.75% only",
          CreditShield:
            "Rs. 2.5 Lacs in case of accidental death of Primary Card member",
        },
      },
    ],
  },
  {
    id: 7,
    name: "IndusInd Bank",
    details: [
      {
        CardName: "Legend",
        CardType: "Premium",
        SourcingCriteria: {
          AgeCriteria:
            "Salaried: 23 to 60 years | Self-Employed: 23 to 65 years",
          EmploymentType: "Salaried / Self-Employed",
          MinMonthlyIncomeSalaried: "75K",
          AnnualIncomeSelfEmployed: "10 Lacs ITR p.a.",
          "OBC Limit": "1 Lac",
        },
        Fees: {
          FirstYearFee: "9999",
          RenewalFee: "0",
        },
        WelcomeBenefits:
          "Complimentary Stay Voucher for Oberoi Hotels in the country. Valid for six months from the date of issue.",
        LoungeAccess:
          "1 complimentary Domestic Airport lounge visit per quarter",
        RewardsAndCashback: {
          MovieOffers:
            "Book one movie ticket & get another movie ticket free on Thu-Sun (Capped at 200 | 3 tickets per month)",
          MilestoneBonus:
            "Earn 4000 Bonus Reward points on spending 6 Lac or more in a year",
        },
        ExtraCategoryBenefits:
          "Enjoy the benefit of Discounted Foreign Currency Mark up at 1.8%",
        Fuel: "1% Fuel Surcharge Waiver",
      },
      {
        CardName: "EasyDiner",
        CardType: "Premium",
        SourcingCriteria: {
          AgeCriteria:
            "Salaried: 23 to 60 years | Self-Employed: 23 to 65 years",
          EmploymentType: "Salaried / Self-Employed",
          MinMonthlyIncomeSalaried:
            "CAT A / CAT B 20K CAT G / C1K 24K CAT C 30K",
          AnnualIncomeSelfEmployed: "4.8 Lacs ITR p.a.",
          "OBC Limit": "75K",
        },
        Fees: {
          FirstYearFee: "1999",
          RenewalFee: "1999",
        },
        WelcomeBenefits: "12 months EazyDiner Prime membership worth 2,495",
        LoungeAccess:
          "2 Complimentary Domestic Airport Lounge Access every calendar quarter",
        RewardsAndCashback: {
          OnlineSpends:
            "10 RP on every 100 spent on dining, shopping & entertainment",
          MilestoneBonus: "Earn 2000 welcome bonus EazyPoints",
        },
        ExtraCategoryBenefits:
          "3X EazyPoints using EazyDiner IndusInd Bank Credit Card",
        Fuel: "1 % fuel surcharge at any petrol pump across India for transactions between 400 to 4000",
      },
    ],
  },
];

export default CreditCardData;
