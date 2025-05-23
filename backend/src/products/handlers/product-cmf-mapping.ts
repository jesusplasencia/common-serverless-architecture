import { ProductEventDetail } from "../types.ts";
import { ProductEventType } from "../events.ts";
import { BaseEventBridgeEvent, Context } from "../../shared/types";
import { Logger } from '../../shared/utils';

import { createEntity } from '../../shared/dynamodb';

const TABLE_NAME = process.env.TABLE_NAME || "MyLocalTable";

export const handler = async (
    event: BaseEventBridgeEvent<ProductEventType.ProductVolCreated, ProductEventDetail>,
    context: Context
  ) => {
  const logger = new Logger(context);

  try {
    logger.log('Processing product event', { event });

    const transformedItem = {
      product_id: event.detail.csc_product_id,
      name: event.detail.name,
      price: event.detail.price.toString(),
      created_at: new Date().toISOString()
    };

    await createEntity(TABLE_NAME, transformedItem);

    return { status: 'SUCCESS' };
  } catch (error) {
    logger.log('Processing failed', { error });
    throw error;
  }
};
