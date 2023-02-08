import { ApiBearerAuth } from "@nestjs/swagger";

export function UseBearerAuth() {
  return ApiBearerAuth("access-token")
}