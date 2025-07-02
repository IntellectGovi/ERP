import "../../styles/index.css"
import "../../styles/button.css"
import "../../styles/input.css"
import "../../styles/card.css"
import "../../styles/badge.css"
import "../../styles/layout.css"

export const metadata = {
  title: "EduManage - School ERP System",
  description: "Complete School ERP Solution for Modern Education",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
