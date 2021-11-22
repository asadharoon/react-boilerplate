import { AbilityBuilder, Ability } from "@casl/ability";

import decode from "jwt-decode";

export const defineAbilitiesForUser = (userToken) => {
  const { can, cannot, rules } = new AbilityBuilder(Ability);
  if (decode(userToken).role === "user") {
    can("access", "/");
    can("access", "/admin");

    cannot("access", "/settings");
  } else {
    can("access", "/auth/login");
    can("access", "/settings");
    can("access", "/admin");
  }

  return new Ability(rules);
};
