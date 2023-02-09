import express from 'express';

import transfersController from '../controllers/transfers';
import transfersValidation from '../validations/transfers';
import validate from '../helpers/validate';

const router = express.Router();

router.put(
  '/',
  validate(transfersValidation.createNewTransfer),
  transfersController.createNewTransfer,
);

router.post(
  '/update',
  validate(transfersValidation.findTransferSteps),
  transfersController.updateTransferSteps,
);

router.post(
  '/update/edges',
  validate(transfersValidation.updateSafeEdges),
  transfersController.updateAllEdgesSafe,
);

router.post(
  '/:transactionHash',
  validate(transfersValidation.getByTransactionHash),
  transfersController.getByTransactionHash,
);

router.post(
  '/',
  validate(transfersValidation.findTransferSteps),
  transfersController.findTransferSteps,
);

router.get('/status', transfersController.getMetrics);

export default router;
