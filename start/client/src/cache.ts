import { InMemoryCache, Reference, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar<boolean>(!!localStorage.getItem("token"));

// Initializes to an empty array
export const cartItemsVar = makeVar<string[]>([]);
export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
        launches: {
          // ...field policy definitions...
        },
      },
    },
  },
});
