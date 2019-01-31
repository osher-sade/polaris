import { defaultFieldResolver, GraphQLField } from 'graphql';
import { SchemaDirectiveVisitor } from 'graphql-tools';

const definition = `
    directive @upper on FIELD_DEFINITION
`;

export class UpperCaseDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field: GraphQLField<any, any>) {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = function(...args: any) {
            const result = resolve.apply(this, args);
            if (typeof result === 'string') {
                return result.toUpperCase();
            }
            return result;
        };
    }
}