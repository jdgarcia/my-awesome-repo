module.exports = {
  "overrides": [
    {
      "files": ["**.ts", "**.tsx"],
      "extends": [
        "react-app",
      ],
      "rules": {
        "jsx-quotes": ["error", "prefer-single"]
      },
    },
  ],
};
