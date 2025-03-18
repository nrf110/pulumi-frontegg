// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Configures a Frontegg permission.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as frontegg from "@pulumi/frontegg";
 *
 * const readUsers = frontegg.getPermission({
 *     key: "fe.secure.read.users",
 * });
 * ```
 */
export class Permission extends pulumi.CustomResource {
    /**
     * Get an existing Permission resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PermissionState, opts?: pulumi.CustomResourceOptions): Permission {
        return new Permission(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'frontegg:index/permission:Permission';

    /**
     * Returns true if the given object is an instance of Permission.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Permission {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Permission.__pulumiType;
    }

    /**
     * The identifier of the category to which this permission belongs.
     */
    public readonly categoryId!: pulumi.Output<string>;
    /**
     * The timestamp at which the permission was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * A human-readable description of the permission.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * A human-readable identifier for the permission.
     */
    public readonly key!: pulumi.Output<string>;
    /**
     * A human-readable name for the permission.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a Permission resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PermissionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PermissionArgs | PermissionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PermissionState | undefined;
            resourceInputs["categoryId"] = state ? state.categoryId : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as PermissionArgs | undefined;
            if ((!args || args.categoryId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'categoryId'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            resourceInputs["categoryId"] = args ? args.categoryId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Permission.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Permission resources.
 */
export interface PermissionState {
    /**
     * The identifier of the category to which this permission belongs.
     */
    categoryId?: pulumi.Input<string>;
    /**
     * The timestamp at which the permission was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * A human-readable description of the permission.
     */
    description?: pulumi.Input<string>;
    /**
     * A human-readable identifier for the permission.
     */
    key?: pulumi.Input<string>;
    /**
     * A human-readable name for the permission.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Permission resource.
 */
export interface PermissionArgs {
    /**
     * The identifier of the category to which this permission belongs.
     */
    categoryId: pulumi.Input<string>;
    /**
     * A human-readable description of the permission.
     */
    description: pulumi.Input<string>;
    /**
     * A human-readable identifier for the permission.
     */
    key: pulumi.Input<string>;
    /**
     * A human-readable name for the permission.
     */
    name?: pulumi.Input<string>;
}
