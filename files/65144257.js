
export type Config = {};

export interface BaseBO {
    condition?: (config: Config) => boolean;
}

export interface ContractDetailBO extends BaseBO {
    sections: ContractSectionBO[];
}

export interface ContractSectionBO extends BaseBO {
    items: ContractSectionItemBO[];
}

export interface ContractSectionItemBO extends BaseBO {
    label: string;
}

export type AnyBO = ContractDetailBO | ContractSectionBO | ContractSectionItemBO;

function isContractDetailBO(target: AnyBO): target is ContractDetailBO {
    return (target as ContractDetailBO).sections != null;
}
function isContractSectionBO(target: AnyBO): target is ContractSectionBO {
    return (target as ContractSectionBO).items != null;
}

export function populate<T extends AnyBO>(inputArray: T[], config: Config): T[] {
    const returnItems: T[] = [];
    for (const item of inputArray) {
        // include this item if the condition passes or is not defined
        if (!item.condition || item.condition(config)) {
            const itemToPopulate = { ...item };

            // check type of item so we know the next array to iterate

            if (isContractDetailBO(itemToPopulate)) {
                const nextArray: ContractSectionBO[] = populate(itemToPopulate.sections, config);
                itemToPopulate.sections = nextArray;
            }
            if (isContractSectionBO(itemToPopulate)) {
                const leaves: ContractSectionItemBO[] = populate(itemToPopulate.items, config);
                itemToPopulate.items = leaves;
            }
            returnItems.push(itemToPopulate);
        }
    }
    return returnItems;
}
