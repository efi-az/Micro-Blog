import { UserApplicationProviders } from "./application";
import { UserRepositoryProviders } from "./repository";

export const USER_PROVIDERS = UserApplicationProviders.concat(UserRepositoryProviders) 