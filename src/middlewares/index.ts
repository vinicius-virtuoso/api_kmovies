import { verifyRealEstateExistsParams } from './realEstate/verifyRealEstateExistsParams.middleware'
import { verifyRealEstateExists } from './realEstate/verifyRealEstateExists.middleware'
import { verifyAddressExists } from './address/verifyAddressExists.middleware'
import { verifyCategorieExists } from './categorie/verifyCategorieExists.middleware'
import { validateBody } from './body/validateBody.middleware'

import { verifyUserNotExists } from './user/verifyUserNotExists.middleware'
import { verifyUserExists } from './user/verifyUserExists.middleware'
import { verifyUserNotExistsId } from './user/verifyUserNotExistsId.middleware'

import { validateToken } from './auth/validateToken.middleware'
import { verifyIsAdmin } from './admin/verifyIsAdmin.middleware'
import { verifyUpdateIsAdmin } from './admin/verifyUpdateIsAdmin.middleware'

import { verifyExistScheduleRs } from './schedules/verifyExistScheduleRs.middleware'
import { verifyScheduleExists } from './schedules/verifyScheduleExists.middleware'
import { verifyDayIsValid } from './schedules/verifyDayIsValid.middleware'
import { verifyHoursIsValid } from './schedules/verifyHoursIsValid.middleware'

export {
  validateBody,
  validateToken,
  verifyUserNotExists,
  verifyUserExists,
  verifyUserNotExistsId,
  verifyIsAdmin,
  verifyUpdateIsAdmin,
  verifyCategorieExists,
  verifyAddressExists,
  verifyExistScheduleRs,
  verifyScheduleExists,
  verifyRealEstateExists,
  verifyDayIsValid,
  verifyHoursIsValid,
  verifyRealEstateExistsParams,
}
