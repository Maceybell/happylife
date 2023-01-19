let plans = [
  {
    type: "Platinum",
    flowers: true,
    gifts: true,
    monthly_consults: true,
    letter_assistant: true,
    reservations: true,
    planned_dates: true,
    price: 99.00,
  },
  {
    type: "Gold",
    flowers: true,
    gifts: true,
    monthly_consults: false,
    letter_assistant: true,
    reservations: true,
    planned_dates: true,
    price: 69.00,
  },
  {
    type: "Silver",
    flowers: true,
    gifts: false,
    monthly_consults: false,
    letter_assistant: false,
    reservations: false,
    planned_dates: true,
    price: 29.00,
  },
];

const seed = async () => {
    const {User, Plan} = require('./models')
    await Plan.bulkCreate(plans)
    console.log("------ SEED COMPLETE -------")
}

module.exports = seed
