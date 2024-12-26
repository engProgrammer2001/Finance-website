const CreditCardData = [
  {
    id: 1,
    name: "SBI Bank Credit Card",
    image: "/assets/CrediteCard/sbi.avif",
    details: {
      CardName: "SBI Card ELITE",
      CardType: "Super Premium Rewards",
      SourcingCriteria: {
        AgeCriteria:
          "For salaried individuals, the age range is between 21 and 65 years. For self-employed individuals, the age range is between 25 and 65 years.",
        EmploymentType:
          "This card is available for both salaried and self-employed individuals.",
        MinMonthlyIncomeSalaried:
          "For salaried individuals, the minimum monthly income required is ₹40,000. For self-employed individuals, the minimum income is ₹30,000.",
        "OBC Limit":
          "The minimum income requirement for OBC limit category is ₹25,000.",
      },
      Fees: {
        FirstYearFee:
          "The annual fee for the first year is ₹4999, which is charged upon card issuance.",
        RenewalFee:
          "The renewal fee for the second year and subsequent years is ₹4999. This is applicable every year for continuing the card services.",
      },
      RenewalFeeWaiver:
        "The renewal fee is waived off if the total annual spends on the card exceed ₹10 Lacs in a year.",
      WelcomeBenefits:
        "New cardholders will receive a welcome gift in the form of an e-Gift voucher worth ₹5000, which can be used on popular platforms such as Yatra.com, Hush Puppies, and more. This offer is valid upon successful payment of the joining fee.",
      RewardsAndCashback: {
        OnlineSpends:
          "The card offers significant reward points for online purchases, especially in categories like dining and shopping. For every ₹100 spent on dining, cardholders will earn 10 Reward Points (RPs), while other general spends will earn 2 RPs per ₹100 spent.",
        MilestoneBonus:
          "Cardholders who spend ₹5 Lacs annually will earn a bonus of 15,000 Reward Points, providing additional benefits as an incentive for high spending.",
        UsageBenefits:
          "For every ₹150 spent on dining and fuel, cardholders will earn 5 Reward Points. Additionally, for every ₹150 spent on other categories, cardholders will receive 1 Reward Point. This allows cardholders to accumulate points based on their expenditure.",
        ExtraCategoryBenefits:
          "For every ₹150 spent in Government and Insurance categories, cardholders will earn 1 Reward Point, further enhancing the benefits for specific categories of spend.",
      },
      Fuel: {
        SurchargeWaiver:
          "A 1% surcharge waiver is available on fuel transactions, capped at ₹250 per month. This helps cardholders save on fuel-related expenses when using the card to pay for fuel.",
      },
      RewardPoints: {
        BaseRewards:
          "Cardholders will earn 2 Reward Points for every ₹100 spent on the card. These points can be redeemed for various rewards as part of the card's reward program.",
        RedemptionRate:
          "The redemption rate for Reward Points is 2 RP = ₹0.50. This means that every 2 Reward Points earned can be redeemed for ₹0.50 in rewards, allowing cardholders to use their points to get discounts or other benefits.",
      },
      ComplimentaryLoungeAccess: {
        DomesticLounge:
          "Cardholders are entitled to 1 complimentary domestic lounge access per calendar quarter. This allows cardholders to enjoy the comforts and amenities of airport lounges across India without additional costs.",
        InternationalLounge:
          "Cardholders will receive 2 complimentary international lounge accesses per year. This benefit is available at select airports worldwide, ensuring a premium experience when traveling abroad.",
      },
    },
    validity:
      "The card is valid from January 2024 and is available for new applications and existing cardholders for continued services.",
  },
  {
    id: 2,
    name: "HSBC Bank Credit Card",
    image: "/assets/CrediteCard/hsbc.png",
    details: {
      CardName: "HSBC Cashback Card",
      CardType: "Super Premium",
      SourcingCriteria: {
        AgeCriteria:
          "The card is available for individuals aged between 18 and 65 years. This age range ensures that the card is accessible to a wide demographic of working individuals and young professionals.",
        EmploymentType:
          "The card is available exclusively for salaried individuals, ensuring that only employed individuals with a consistent income can apply for it.",
        MinMonthlyIncomeSalaried:
          "To be eligible for this card, the applicant must have a minimum monthly income of ₹33,000. This ensures that individuals with a stable income are eligible for the premium benefits the card offers.",
        "OBC Limit":
          "The minimum income requirement for OBC limit category is ₹25,000.",
      },
      Fees: {
        FirstYearFee:
          "The fee for the first year of the card is ₹999. This amount is charged upon issuance of the card and covers the costs of providing premium services in the first year.",
        RenewalFee:
          "The renewal fee is also ₹999, which is charged every year after the first year to continue enjoying the card benefits.",
      },
      RenewalFeeWaiver:
        "The renewal fee is waived off if the cardholder spends a minimum of ₹2 Lacs in the anniversary year. This encourages cardholders to use the card regularly to avail of the benefits and waive the renewal fee.",
      WelcomeBenefits:
        "Upon activation and successful use of the card, new cardholders will receive Amazon vouchers worth ₹1000 on a minimum transaction of ₹10,000 within the first 30 days of receiving the card. This offer is valid from 1st January 2024 till 30th June 2024, providing an attractive welcome gift to new users.",
      RewardsAndCashback: {
        OnlineSpends:
          "For online spends, cardholders will receive 1.5% cashback, providing additional savings on digital transactions. In addition, there are special offers such as a Buy One Get One (BOGO) deal on movie tickets up to ₹250 on BookMyShow (valid until 31st March 2024). Additionally, cardholders can enjoy a 30% instant discount on EazyDiner (valid until 31st March 2024), enhancing the value of the card for online and entertainment purchases.",
        MilestoneBonus:
          "Cardholders who spend ₹4,00,000 or more in an anniversary year will earn 5X rewards on eligible spends. This can amount to a maximum of 15,000 accelerated reward points, providing an incentive for high-spending cardholders to earn additional rewards.",
        UsageBenefits:
          "Cardholders will receive 1.5% unlimited cashback on all spends, excluding certain categories as per the bank's terms and conditions. This cashback benefit makes the card a great option for regular purchases, with no cap on the cashback amount.",
        ExtraCategoryBenefits:
          "The card offers air miles conversion on popular frequent flyer programs, including InterMiles, British Airways, and Singapore Airlines. This benefit is ideal for cardholders who travel frequently and want to accumulate miles for future flights and upgrades.",
      },
      Fuel: {
        SurchargeWaiver:
          "Cardholders can save up to ₹3,000 annually on fuel surcharge fees. This is a significant benefit for those who frequently use the card to pay for fuel, helping to reduce the overall cost of fuel purchases throughout the year.",
      },
      RewardPoints: {
        BaseRewards:
          "Cardholders will earn 1.5% cashback on all purchases, which is equivalent to reward points. These points can be redeemed for various rewards as part of the card's reward program.",
        RedemptionRate:
          "The redemption rate for cashback is 1% = ₹0.50. This means that every 1% cashback earned can be redeemed for ₹0.50 in rewards, allowing cardholders to use their points to get discounts or other benefits.",
      },
      ComplimentaryLoungeAccess: {
        DomesticLounge:
          "Cardholders are entitled to 4 complimentary domestic lounge visits per year, with one visit available per calendar quarter. This benefit ensures that cardholders can relax and enjoy premium services at airport lounges during their travels within India.",
        InternationalLounge:
          "Cardholders are entitled to 2 complimentary international lounge visits per year. This benefit is available at select airports worldwide, ensuring a premium experience when traveling abroad.",
      },
    },
    validity:
      "The card is valid starting from January 2024 and remains available for both new applicants and existing cardholders who wish to continue enjoying its premium benefits.",
  },
  {
    id: 3,
    name: "SCB (Standard Chartered Bank) Credit Card",
    image: "/assets/CrediteCard/sc.png",
    details: {
      CardName: "SCB Rewards Card",
      CardType: "Premium",
      SourcingCriteria: {
        AgeCriteria: "21 to 60 years",
        EmploymentType: "Salaried",
        MinMonthlyIncomeSalaried: "25K",
        "OBC Limit": "40K",
      },
      Fees: {
        FirstYearFee: "350",
        RenewalFee: "350",
      },
      RenewalFeeWaiver: "On spends of ₹50K in the previous year",
      WelcomeBenefits: "4000 RP on payment of joining fees",
      RewardsAndCashback: {
        OnlineSpends:
          "Flat 20% discount on domestic & international flight bookings, 10% off on standalone hotel and airline bookings, 125 off on bus ticket bookings (min. ₹500)",
        MilestoneBonus: "10x rewards on hotel and airline bookings",
        UsageBenefits:
          "5 RP for every ₹150 spent on dining and fuel, 1 RP on every ₹150 spent on other categories",
        ExtraCategoryBenefits:
          "1 RP on every ₹150 spent on Government & Insurance categories",
      },
      Fuel: {
        SurchargeWaiver: "1% Fuel Surcharge waiver (min. transaction ₹400)",
      },
      RewardPoints: {
        BaseRewards: "2 RP on every ₹100 spent",
        RedemptionRate: "2 Reward Points = ₹0.50",
      },
      ComplimentaryLoungeAccess: {
        DomesticLounge:
          "1 Complimentary domestic lounge access per calendar quarter",
        InternationalLounge:
          "2 Complimentary international lounge access per year",
      },
    },
    validity: "From January 2024",
  },
  {
    id: 4,
    name: "Axis Bank MY ZONE Credit Card",
    image: "/assets/CrediteCard/axis.png",
    details: {
      CardName: "Axis Bank MY ZONE Card",
      CardType: "Entry Level",
      SourcingCriteria: {
        AgeCriteria: "18 to 70 years",
        EmploymentType: "Salaried / Self-Employed",
        MinMonthlyIncomeSalaried: "15K",
        "OBC Limit": "30K",
      },
      Fees: {
        FirstYearFee: "Lifetime Free",
        RenewalFee: "Lifetime Free",
      },
      RenewalFeeWaiver: "NA",
      WelcomeBenefits: "NA",
      RewardsAndCashback: {
        OnlineSpends: "10x rewards on selected merchants",
        MilestoneBonus: "1500 EDGE Rewards on spends of ₹30,000 per month",
        UsageBenefits:
          "10 EDGE rewards per ₹100 spent on Zomato, BigBasket, Myntra, UrbanCompany",
      },
      Fuel: {
        SurchargeWaiver:
          "1% fuel surcharge waiver on transactions between ₹400 to ₹4,000",
      },
      RewardPoints: {
        BaseRewards: "10 EDGE rewards per ₹100 spent",
        RedemptionRate: "10 EDGE rewards = ₹1",
      },
      ComplimentaryLoungeAccess: {
        DomesticLounge: "4 Domestic lounge visits per year (1 per quarter)",
        InternationalLounge: "NA",
      },
      ExtraCategoryBenefits:
        "Sonyliv Premium annual subscription worth ₹3,999 on first spend in 30 days of card issuance",
    },
    validity: "The card is valid from January 2024 and is available for new applications and existing cardholders for continued services.",
  },
  {
    id: 5,
    name: "HDFC FIRST Bank Credit Card",
    image: "/assets/CrediteCard/hdfc.webp",
    details: {
      CardName: "HDFC FIRST Select Card",
      CardType: "Premium Cashback and Rewards",
      SourcingCriteria: {
        AgeCriteria:
          "For salaried individuals, the age range is between 21 and 60 years. For self-employed individuals, the age range is between 25 and 60 years.",
        EmploymentType:
          "This card is available for both salaried and self-employed individuals.",
        MinMonthlyIncomeSalaried:
          "For salaried individuals, the minimum monthly income required is ₹25,000. For self-employed individuals, the minimum income is ₹30,000.",
        "OBC Limit":
          "The minimum income requirement for OBC limit category is ₹20,000.",
      },
      Fees: {
        FirstYearFee:
          "This card is Lifetime Free, and no first-year fee applies.",
        RenewalFee: "Lifetime Free with no renewal charges.",
      },
      RenewalFeeWaiver:
        "No renewal fee applies as the card is lifetime free for all users.",
      WelcomeBenefits:
        "Cardholders will receive Rs. 500 worth of vouchers upon spending Rs. 5,000 or more within 30 days of card activation. Additionally, 5% cashback is offered on EMI transactions done within the first 30 days (up to Rs. 1000).",
      RewardsAndCashback: {
        OnlineSpends:
          "Enjoy 10% cashback on all online transactions during the first month of activation. Regular online spends earn 3 Reward Points (RPs) for every ₹100 spent.",
        MilestoneBonus:
          "Spend ₹3 Lacs annually and earn a milestone reward of Rs. 5,000 cashback.",
        UsageBenefits:
          "Earn 2 Reward Points for every ₹100 spent on dining and entertainment. Fuel purchases are eligible for a 1% surcharge waiver.",
      },
      Fuel: {
        SurchargeWaiver:
          "1% fuel surcharge waiver on transactions between ₹400 to ₹4,000",
      },
      RewardPoints: {
        BaseRewards: "10 EDGE rewards per ₹100 spent",
        RedemptionRate: "10 EDGE rewards = ₹1",
      },
      ComplimentaryLoungeAccess: {
        DomesticLounge: "4 Domestic lounge visits per year (1 per quarter)",
        InternationalLounge: "NA",
      },
      ExtraCategoryBenefits:
        "Sonyliv Premium annual subscription worth ₹3,999 on first spend in 30 days of card issuance",
    },
    validity:
      "The card is valid from January 2024 and is available for new applications and existing cardholders for continued services.",
  },
  {
    id: 6,
    name: "Yes Bank Credit Card",
    image: "/assets/CrediteCard/yes.png",
    details: {
      CardName: "Yes First Exclusive",
      CardType: "Super Premium",
      SourcingCriteria: {
        AgeCriteria: "Salaried: 21 to 60 Years | Self-Employed: 21 to 70 Years",
        EmploymentType: "Salaried / Self-Employed",
        MinMonthlyIncomeSalaried:
          "2 Lacs and for self-employed 18 Lacs ITR p.a.",
        "OBC Limit": "8 Lacs and above",
      },
      Fees: {
        FirstYearFee: "999 and 18 Lacs ITR p.a.",
        "OBC Limit": "8 Lacs and above",
        RenewalFee: "999 and On spends of 40K within 30 days of card issuance",
      },
      RenewalFeeWaiver:
        "The renewal fee is waived off if the cardholder spends a minimum of ₹2 Lacs in the anniversary year. This encourages cardholders to use the card regularly to avail of the benefits and waive the renewal fee.",
      WelcomeBenefits:
        "Upon activation and successful use of the card, new cardholders will receive Amazon vouchers worth ₹1000 on a minimum transaction of ₹10,000 within the first 30 days of receiving the card. This offer is valid from 1st January 2024 till 30th June 2024, providing an attractive welcome gift to new users.",
      RewardsAndCashback: {
        OnlineSpends:
          "For online spends, cardholders will receive 1.5% cashback, providing additional savings on digital transactions. In addition, there are special offers such as a Buy One Get One (BOGO) deal on movie tickets up to ₹250 on BookMyShow (valid until 31st March 2024). Additionally, cardholders can enjoy a 30% instant discount on EazyDiner (valid until 31st March 2024), enhancing the value of the card for online and entertainment purchases.",
        MilestoneBonus:
          "Cardholders who spend ₹4,00,000 or more in an anniversary year will earn 5X rewards on eligible spends. This can amount to a maximum of 15,000 accelerated reward points, providing an incentive for high-spending cardholders to earn additional rewards.",
        UsageBenefits:
          "Cardholders will receive 1.5% unlimited cashback on all spends, excluding certain categories as per the bank's terms and conditions. This cashback benefit makes the card a great option for regular purchases, with no cap on the cashback amount.",
        ExtraCategoryBenefits:
          "The card offers air miles conversion on popular frequent flyer programs, including InterMiles, British Airways, and Singapore Airlines. This benefit is ideal for cardholders who travel frequently and want to accumulate miles for future flights and upgrades.",
      },
      Fuel: {
        SurchargeWaiver:
          "Cardholders can save up to ₹3,000 annually on fuel surcharge fees. This is a significant benefit for those who frequently use the card to pay for fuel, helping to reduce the overall cost of fuel purchases throughout the year.",
      },
      RewardPoints: {
        BaseRewards:
          "Cardholders will earn 1.5% cashback on all purchases, which is equivalent to reward points. These points can be redeemed for various rewards as part of the card's reward program.",
        RedemptionRate:
          "The redemption rate for cashback is 1% = ₹0.50. This means that every 1% cashback earned can be redeemed for ₹0.50 in rewards, allowing cardholders to use their points to get discounts or other benefits.",
      },
      ComplimentaryLoungeAccess: {
        DomesticLounge:
          "Cardholders are entitled to 4 complimentary domestic lounge visits per year, with one visit available per calendar quarter. This benefit ensures that cardholders can relax and enjoy premium services at airport lounges during their travels within India.",
        InternationalLounge:
          "Cardholders are entitled to 2 complimentary international lounge visits per year. This benefit is available at select airports worldwide, ensuring a premium experience when traveling abroad.",
      },
    },
    validity:
      "The card is valid starting from January 2024 and remains available for both new applicants and existing cardholders who wish to continue enjoying its premium benefits.",
  },
  {
    id: 7,
    name: "IndusInd Bank",
    image: "/assets/CrediteCard/indus.png",
    details: {
      CardName: "Legend",
      CardType: "Premium",
      SourcingCriteria: {
        AgeCriteria: "Salaried: 23 to 60 years | Self-Employed: 23 to 65 years",
        EmploymentType: "Salaried / Self-Employed",
        MinMonthlyIncomeSalaried: "75K  and 10 Lacs ITR p.a.",
        "OBC Limit": "1 Lacs and above",
      },
      Fees: {
        FirstYearFee: "9999",
        RenewalFee: "0",
      },
      RenewalFeeWaiver:
        "The renewal fee is waived off if the cardholder spends a minimum of ₹2 Lacs in the anniversary year. This encourages cardholders to use the card regularly to avail of the benefits and waive the renewal fee.",
      WelcomeBenefits:
        "Upon activation and successful use of the card, new cardholders will receive Amazon vouchers worth ₹1000 on a minimum transaction of ₹10,000 within the first 30 days of receiving the card. This offer is valid from 1st January 2024 till 30th June 2024, providing an attractive welcome gift to new users.",
      RewardsAndCashback: {
        OnlineSpends:
          "For online spends, cardholders will receive 1.5% cashback, providing additional savings on digital transactions. In addition, there are special offers such as a Buy One Get One (BOGO) deal on movie tickets up to ₹250 on BookMyShow (valid until 31st March 2024). Additionally, cardholders can enjoy a 30% instant discount on EazyDiner (valid until 31st March 2024), enhancing the value of the card for online and entertainment purchases.",
        MilestoneBonus:
          "Cardholders who spend ₹4,00,000 or more in an anniversary year will earn 5X rewards on eligible spends. This can amount to a maximum of 15,000 accelerated reward points, providing an incentive for high-spending cardholders to earn additional rewards.",
        UsageBenefits:
          "Cardholders will receive 1.5% unlimited cashback on all spends, excluding certain categories as per the bank's terms and conditions. This cashback benefit makes the card a great option for regular purchases, with no cap on the cashback amount.",
        ExtraCategoryBenefits:
          "The card offers air miles conversion on popular frequent flyer programs, including InterMiles, British Airways, and Singapore Airlines. This benefit is ideal for cardholders who travel frequently and want to accumulate miles for future flights and upgrades.",
      },
      Fuel: {
        SurchargeWaiver:
          "Cardholders can save up to ₹3,000 annually on fuel surcharge fees. This is a significant benefit for those who frequently use the card to pay for fuel, helping to reduce the overall cost of fuel purchases throughout the year.",
      },
      RewardPoints: {
        BaseRewards:
          "Cardholders will earn 1.5% cashback on all purchases, which is equivalent to reward points. These points can be redeemed for various rewards as part of the card's reward program.",
        RedemptionRate:
          "The redemption rate for cashback is 1% = ₹0.50. This means that every 1% cashback earned can be redeemed for ₹0.50 in rewards, allowing cardholders to use their points to get discounts or other benefits.",
      },
      ComplimentaryLoungeAccess: {
        DomesticLounge:
          "Cardholders are entitled to 4 complimentary domestic lounge visits per year, with one visit available per calendar quarter. This benefit ensures that cardholders can relax and enjoy premium services at airport lounges during their travels within India.",
        InternationalLounge:
          "Cardholders are entitled to 2 complimentary international lounge visits per year. This benefit is available at select airports worldwide, ensuring a premium experience when traveling abroad.",
      },
    },
    validity: "The card is valid from January 2024 and is available for new applications and existing cardholders for continued services.",
  },
  {
    id: 8,
    name: "AU Bank Credit Card",
    image: "/assets/CrediteCard/au.jpg",
    details: {
      CardName: "Altura Plus Credit Card",
      CardType: "Premium",
      SourcingCriteria: {
        AgeCriteria: "Salaried: 21 to 60 years | Self-Employed: 21 to 65 years",
        EmploymentType: "Salaried / Self-Employed",
        MinMonthlyIncomeSalaried: "25K and 3 Lacs ITR p.a.",
        "OBC Limit": "1 Lacs and above",
      },
      Fees: {
        FirstYearFee: "199",
        RenewalFee: "199",
      },
      RenewalFeeWaiver:
        "The renewal fee is waived off if the cardholder spends a minimum of ₹2 Lacs in the anniversary year. This encourages cardholders to use the card regularly to avail of the benefits and waive the renewal fee.",
      WelcomeBenefits:
        "Amazon voucher worth INR 500 on spending INR 10,000 within 60 days of card issuance.",
      RewardsAndCashback: {
        OnlineSpends:
          "For online spends, cardholders will receive 1.5% cashback, providing additional savings on digital transactions. In addition, there are special offers such as a Buy One Get One (BOGO) deal on movie tickets up to ₹250 on BookMyShow (valid until 31st March 2024). Additionally, cardholders can enjoy a 30% instant discount on EazyDiner (valid until 31st March 2024), enhancing the value of the card for online and entertainment purchases.",
        MilestoneBonus:
          "Cardholders who spend ₹4,00,000 or more in an anniversary year will earn 5X rewards on eligible spends. This can amount to a maximum of 15,000 accelerated reward points, providing an incentive for high-spending cardholders to earn additional rewards.",
        UsageBenefits:
          "Cardholders will receive 1.5% unlimited cashback on all spends, excluding certain categories as per the bank's terms and conditions. This cashback benefit makes the card a great option for regular purchases, with no cap on the cashback amount.",
        ExtraCategoryBenefits:
          "The card offers air miles conversion on popular frequent flyer programs, including InterMiles, British Airways, and Singapore Airlines. This benefit is ideal for cardholders who travel frequently and want to accumulate miles for future flights and upgrades.",
      },
      Fuel: {
        SurchargeWaiver:
          "Cardholders can save up to ₹3,000 annually on fuel surcharge fees. This is a significant benefit for those who frequently use the card to pay for fuel, helping to reduce the overall cost of fuel purchases throughout the year.",
      },
      RewardPoints: {
        BaseRewards:
          "5X Reward Points on online shopping categories like electronics, fashion, and travel.",
        RedemptionRate:
          "Earn 10,000 bonus Reward Points on spending INR 2 Lacs in a year.",
      },
      ComplimentaryLoungeAccess: {
        DomesticLounge:
          "Cardholders are entitled to 4 complimentary domestic lounge visits per year, with one visit available per calendar quarter. This benefit ensures that cardholders can relax and enjoy premium services at airport lounges during their travels within India.",
        InternationalLounge:
          "Cardholders are entitled to 2 complimentary international lounge visits per year. This benefit is available at select airports worldwide, ensuring a premium experience when traveling abroad.",
      },
    },
    validity: "The card is valid from January 2024 and is available for new applications and existing cardholders for continued services.",
  },
  {
    id: 9,
    name: "Kotak Bank Credit Card",
    image: "/assets/CrediteCard/kotak.jpeg",
    details: {
      CardName: "League Platinum",
      CardType: "Entry Level Rewards",
      SourcingCriteria: {
        AgeCriteria: "21-65 years",
        EmploymentType: "Salaried",
        MinMonthlyIncomeSalaried: "30K",
        "OBC Limit": "50K",
      },
      Fees: {
        FirstYearFee: "0",
        RenewalFee: "0",
      },
      RenewalFeeWaiver:
        "Spend 1.25 Lacs every 6 months and get either 4 free PVR tickets or 10000 reward points",
      WelcomeBenefits:
        "Reward points worth 500, post realization of joining fee",
      RewardsAndCashback: {
        OnlineSpends:
          "8 Reward Points on every ₹150 spent on Travel Agencies, Tour Operators, Airlines, Electric Sales, Durable Goods, Departmental Stores",
        MilestoneBonus:
          "Railway surcharge waiver on IRCTC transactions, max ₹2500 per calendar year",
        UsageBenefits:
          "Cardholders will receive 1.5% unlimited cashback on all spends, excluding certain categories as per the bank's terms and conditions. This cashback benefit makes the card a great option for regular purchases, with no cap on the cashback amount.",
        ExtraCategoryBenefits:
          "Insurance shield cover of ₹1.25 Lacs against fraudulent usage up to 7 days pre-reporting",
      },
      Fuel: {
        SurchargeWaiver:
          "On transactions between ₹500 and ₹3000, capped at ₹3500 per calendar year",
      },
      RewardPoints: {
        BaseRewards:
          "Cardholders will earn 1.5% cashback on all purchases, which is equivalent to reward points. These points can be redeemed for various rewards as part of the card's reward program.",
        RedemptionRate:
          "The redemption rate for cashback is 1% = ₹0.50. This means that every 1% cashback earned can be redeemed for ₹0.50 in rewards, allowing cardholders to use their points to get discounts or other benefits.",
      },
      ComplimentaryLoungeAccess: {
        DomesticLounge:
          "Cardholders are entitled to 4 complimentary domestic lounge visits per year, with one visit available per calendar quarter. This benefit ensures that cardholders can relax and enjoy premium services at airport lounges during their travels within India.",
        InternationalLounge:
          "Cardholders are entitled to 2 complimentary international lounge visits per year. This benefit is available at select airports worldwide, ensuring a premium experience when traveling abroad.",
      },
    },
    validity: "The card is valid from January 2024 and is available for new applications and existing cardholders for continued services.",
  },
];

export default CreditCardData;
