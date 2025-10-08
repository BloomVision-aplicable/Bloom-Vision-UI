export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bv_green: "#0f3b2e",
        bv_mahogany: "#6b2f1a",
        bv_gold: "#c8a75a",
        bv_cream: "#f6f2ea"
      },
      boxShadow: { bv: "0 12px 30px rgba(0,0,0,0.15)" }
    }
  },
  plugins: []
}
