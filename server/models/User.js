const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "Please Provide Username"],
  },
  password: {
    type: String,
    required: [true, "Please Provide Password"],
  },
  info: [
    {
      firstName: {
        type: String,
        required: [true, "You must tell me your First Name"],
      },
      lastName: {
        type: String,
        required: [true, "You must tell me your Last Name"],
      },
    },
  ],
  contact: [
    {
      phoneNumber: {
        type: String,
        required: false,
      },

      alterPhoneNumber: {
        type: String,
        required: false,
      },

      email: {
        type: String,
        unique: true,
        required: false,
        match: [
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
          "Please Provide a valid email",
        ],
      },
      sns: [
        {
          facebook: {
            type: String,
            required: false,
          },
          instagram: {
            type: String,
            required: false,
          },

          twitter: {
            type: String,
            required: false,
          },

          customLink: {
            have: Boolean,
            name: {
              type: String,
              required: false,
            },
            url: {
              type: String,
              required: false,
            },
          },
        },
      ],
    },
  ],
  setting: {
    type: String,
    required: false,
  },
  quotes: {
    type: String,
    required: false,
  },
});

/////////previous-> run this befor saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
