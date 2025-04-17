import React from "react";

export default function Footer() {
    return (
      <footer className="mt-16 py-6 text-center text-sm text-gray-500 border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} Moe Nagase. All rights reserved.</p>
      </footer>
    );
  }
  