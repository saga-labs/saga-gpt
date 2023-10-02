import React from "react";

// Layout
import Layout from "../../features/Layout";

const SettingsPage = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-2">
        <a href="/settings">Sign in</a>
      </div>
    </Layout>
  );
};

export default SettingsPage;
