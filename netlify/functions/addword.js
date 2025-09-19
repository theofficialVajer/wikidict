exports.handler = async (event) => {
  try {
    const { word, meaning, password } = JSON.parse(event.body);

    // Change this password for security
    const ADMIN_PASSWORD = "vajer123";

    if (password !== ADMIN_PASSWORD) {
      return {
        statusCode: 403,
        body: JSON.stringify({ message: "❌ Unauthorized" })
      };
    }

    // For now, just respond (later we can save to JSON or DB)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `✅ Word '${word}' added with meaning '${meaning}'.` })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "⚠️ Error", error: err.message })
    };
  }
};
