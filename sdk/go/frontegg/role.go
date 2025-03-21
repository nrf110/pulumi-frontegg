// Code generated by the Pulumi Terraform Bridge (tfgen) Tool DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package frontegg

import (
	"context"
	"reflect"

	"errors"
	"github.com/nrf110/pulumi-frontegg/sdk/go/frontegg/internal"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Configures a Frontegg role.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
//
//	"github.com/nrf110/pulumi-frontegg/sdk/go/frontegg"
//	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
//
// )
//
//	func main() {
//		pulumi.Run(func(ctx *pulumi.Context) error {
//			_, err := frontegg.NewRole(ctx, "example", &frontegg.RoleArgs{
//				Name:        pulumi.String("Example"),
//				Key:         pulumi.String("example"),
//				Description: pulumi.String("An example of a role"),
//				Default:     pulumi.Bool(true),
//				Level:       pulumi.Int(0),
//				PermissionIds: pulumi.StringArray{
//					fronteggPermission.Example.Id,
//					readUsers.Id,
//				},
//			})
//			if err != nil {
//				return err
//			}
//			return nil
//		})
//	}
//
// ```
type Role struct {
	pulumi.CustomResourceState

	// The timestamp at which the role was created.
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// Whether the role should be applied to new users by default.
	Default pulumi.BoolOutput `pulumi:"default"`
	// A human-readable description of the role.
	Description pulumi.StringOutput `pulumi:"description"`
	// Whether the role should be applied to the first user in the tenant (new tenants only).
	FirstUser pulumi.BoolPtrOutput `pulumi:"firstUser"`
	// A human-readable identifier for the role.
	Key pulumi.StringOutput `pulumi:"key"`
	// The level of the role in the role hierarchy.
	Level pulumi.IntOutput `pulumi:"level"`
	// A human-readable name for the role.
	Name pulumi.StringOutput `pulumi:"name"`
	// The IDs of the permissions that the role confers to its members.
	PermissionIds pulumi.StringArrayOutput `pulumi:"permissionIds"`
	// The ID of the tenant that owns the role.
	TenantId pulumi.StringPtrOutput `pulumi:"tenantId"`
	// The ID of the vendor that owns the role.
	VendorId pulumi.StringOutput `pulumi:"vendorId"`
}

// NewRole registers a new resource with the given unique name, arguments, and options.
func NewRole(ctx *pulumi.Context,
	name string, args *RoleArgs, opts ...pulumi.ResourceOption) (*Role, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Default == nil {
		return nil, errors.New("invalid value for required argument 'Default'")
	}
	if args.Description == nil {
		return nil, errors.New("invalid value for required argument 'Description'")
	}
	if args.Key == nil {
		return nil, errors.New("invalid value for required argument 'Key'")
	}
	if args.Level == nil {
		return nil, errors.New("invalid value for required argument 'Level'")
	}
	if args.PermissionIds == nil {
		return nil, errors.New("invalid value for required argument 'PermissionIds'")
	}
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource Role
	err := ctx.RegisterResource("frontegg:index/role:Role", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetRole gets an existing Role resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetRole(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *RoleState, opts ...pulumi.ResourceOption) (*Role, error) {
	var resource Role
	err := ctx.ReadResource("frontegg:index/role:Role", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Role resources.
type roleState struct {
	// The timestamp at which the role was created.
	CreatedAt *string `pulumi:"createdAt"`
	// Whether the role should be applied to new users by default.
	Default *bool `pulumi:"default"`
	// A human-readable description of the role.
	Description *string `pulumi:"description"`
	// Whether the role should be applied to the first user in the tenant (new tenants only).
	FirstUser *bool `pulumi:"firstUser"`
	// A human-readable identifier for the role.
	Key *string `pulumi:"key"`
	// The level of the role in the role hierarchy.
	Level *int `pulumi:"level"`
	// A human-readable name for the role.
	Name *string `pulumi:"name"`
	// The IDs of the permissions that the role confers to its members.
	PermissionIds []string `pulumi:"permissionIds"`
	// The ID of the tenant that owns the role.
	TenantId *string `pulumi:"tenantId"`
	// The ID of the vendor that owns the role.
	VendorId *string `pulumi:"vendorId"`
}

type RoleState struct {
	// The timestamp at which the role was created.
	CreatedAt pulumi.StringPtrInput
	// Whether the role should be applied to new users by default.
	Default pulumi.BoolPtrInput
	// A human-readable description of the role.
	Description pulumi.StringPtrInput
	// Whether the role should be applied to the first user in the tenant (new tenants only).
	FirstUser pulumi.BoolPtrInput
	// A human-readable identifier for the role.
	Key pulumi.StringPtrInput
	// The level of the role in the role hierarchy.
	Level pulumi.IntPtrInput
	// A human-readable name for the role.
	Name pulumi.StringPtrInput
	// The IDs of the permissions that the role confers to its members.
	PermissionIds pulumi.StringArrayInput
	// The ID of the tenant that owns the role.
	TenantId pulumi.StringPtrInput
	// The ID of the vendor that owns the role.
	VendorId pulumi.StringPtrInput
}

func (RoleState) ElementType() reflect.Type {
	return reflect.TypeOf((*roleState)(nil)).Elem()
}

type roleArgs struct {
	// Whether the role should be applied to new users by default.
	Default bool `pulumi:"default"`
	// A human-readable description of the role.
	Description string `pulumi:"description"`
	// Whether the role should be applied to the first user in the tenant (new tenants only).
	FirstUser *bool `pulumi:"firstUser"`
	// A human-readable identifier for the role.
	Key string `pulumi:"key"`
	// The level of the role in the role hierarchy.
	Level int `pulumi:"level"`
	// A human-readable name for the role.
	Name *string `pulumi:"name"`
	// The IDs of the permissions that the role confers to its members.
	PermissionIds []string `pulumi:"permissionIds"`
	// The ID of the tenant that owns the role.
	TenantId *string `pulumi:"tenantId"`
}

// The set of arguments for constructing a Role resource.
type RoleArgs struct {
	// Whether the role should be applied to new users by default.
	Default pulumi.BoolInput
	// A human-readable description of the role.
	Description pulumi.StringInput
	// Whether the role should be applied to the first user in the tenant (new tenants only).
	FirstUser pulumi.BoolPtrInput
	// A human-readable identifier for the role.
	Key pulumi.StringInput
	// The level of the role in the role hierarchy.
	Level pulumi.IntInput
	// A human-readable name for the role.
	Name pulumi.StringPtrInput
	// The IDs of the permissions that the role confers to its members.
	PermissionIds pulumi.StringArrayInput
	// The ID of the tenant that owns the role.
	TenantId pulumi.StringPtrInput
}

func (RoleArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*roleArgs)(nil)).Elem()
}

type RoleInput interface {
	pulumi.Input

	ToRoleOutput() RoleOutput
	ToRoleOutputWithContext(ctx context.Context) RoleOutput
}

func (*Role) ElementType() reflect.Type {
	return reflect.TypeOf((**Role)(nil)).Elem()
}

func (i *Role) ToRoleOutput() RoleOutput {
	return i.ToRoleOutputWithContext(context.Background())
}

func (i *Role) ToRoleOutputWithContext(ctx context.Context) RoleOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RoleOutput)
}

// RoleArrayInput is an input type that accepts RoleArray and RoleArrayOutput values.
// You can construct a concrete instance of `RoleArrayInput` via:
//
//	RoleArray{ RoleArgs{...} }
type RoleArrayInput interface {
	pulumi.Input

	ToRoleArrayOutput() RoleArrayOutput
	ToRoleArrayOutputWithContext(context.Context) RoleArrayOutput
}

type RoleArray []RoleInput

func (RoleArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Role)(nil)).Elem()
}

func (i RoleArray) ToRoleArrayOutput() RoleArrayOutput {
	return i.ToRoleArrayOutputWithContext(context.Background())
}

func (i RoleArray) ToRoleArrayOutputWithContext(ctx context.Context) RoleArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RoleArrayOutput)
}

// RoleMapInput is an input type that accepts RoleMap and RoleMapOutput values.
// You can construct a concrete instance of `RoleMapInput` via:
//
//	RoleMap{ "key": RoleArgs{...} }
type RoleMapInput interface {
	pulumi.Input

	ToRoleMapOutput() RoleMapOutput
	ToRoleMapOutputWithContext(context.Context) RoleMapOutput
}

type RoleMap map[string]RoleInput

func (RoleMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Role)(nil)).Elem()
}

func (i RoleMap) ToRoleMapOutput() RoleMapOutput {
	return i.ToRoleMapOutputWithContext(context.Background())
}

func (i RoleMap) ToRoleMapOutputWithContext(ctx context.Context) RoleMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(RoleMapOutput)
}

type RoleOutput struct{ *pulumi.OutputState }

func (RoleOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**Role)(nil)).Elem()
}

func (o RoleOutput) ToRoleOutput() RoleOutput {
	return o
}

func (o RoleOutput) ToRoleOutputWithContext(ctx context.Context) RoleOutput {
	return o
}

// The timestamp at which the role was created.
func (o RoleOutput) CreatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *Role) pulumi.StringOutput { return v.CreatedAt }).(pulumi.StringOutput)
}

// Whether the role should be applied to new users by default.
func (o RoleOutput) Default() pulumi.BoolOutput {
	return o.ApplyT(func(v *Role) pulumi.BoolOutput { return v.Default }).(pulumi.BoolOutput)
}

// A human-readable description of the role.
func (o RoleOutput) Description() pulumi.StringOutput {
	return o.ApplyT(func(v *Role) pulumi.StringOutput { return v.Description }).(pulumi.StringOutput)
}

// Whether the role should be applied to the first user in the tenant (new tenants only).
func (o RoleOutput) FirstUser() pulumi.BoolPtrOutput {
	return o.ApplyT(func(v *Role) pulumi.BoolPtrOutput { return v.FirstUser }).(pulumi.BoolPtrOutput)
}

// A human-readable identifier for the role.
func (o RoleOutput) Key() pulumi.StringOutput {
	return o.ApplyT(func(v *Role) pulumi.StringOutput { return v.Key }).(pulumi.StringOutput)
}

// The level of the role in the role hierarchy.
func (o RoleOutput) Level() pulumi.IntOutput {
	return o.ApplyT(func(v *Role) pulumi.IntOutput { return v.Level }).(pulumi.IntOutput)
}

// A human-readable name for the role.
func (o RoleOutput) Name() pulumi.StringOutput {
	return o.ApplyT(func(v *Role) pulumi.StringOutput { return v.Name }).(pulumi.StringOutput)
}

// The IDs of the permissions that the role confers to its members.
func (o RoleOutput) PermissionIds() pulumi.StringArrayOutput {
	return o.ApplyT(func(v *Role) pulumi.StringArrayOutput { return v.PermissionIds }).(pulumi.StringArrayOutput)
}

// The ID of the tenant that owns the role.
func (o RoleOutput) TenantId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *Role) pulumi.StringPtrOutput { return v.TenantId }).(pulumi.StringPtrOutput)
}

// The ID of the vendor that owns the role.
func (o RoleOutput) VendorId() pulumi.StringOutput {
	return o.ApplyT(func(v *Role) pulumi.StringOutput { return v.VendorId }).(pulumi.StringOutput)
}

type RoleArrayOutput struct{ *pulumi.OutputState }

func (RoleArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*Role)(nil)).Elem()
}

func (o RoleArrayOutput) ToRoleArrayOutput() RoleArrayOutput {
	return o
}

func (o RoleArrayOutput) ToRoleArrayOutputWithContext(ctx context.Context) RoleArrayOutput {
	return o
}

func (o RoleArrayOutput) Index(i pulumi.IntInput) RoleOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *Role {
		return vs[0].([]*Role)[vs[1].(int)]
	}).(RoleOutput)
}

type RoleMapOutput struct{ *pulumi.OutputState }

func (RoleMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*Role)(nil)).Elem()
}

func (o RoleMapOutput) ToRoleMapOutput() RoleMapOutput {
	return o
}

func (o RoleMapOutput) ToRoleMapOutputWithContext(ctx context.Context) RoleMapOutput {
	return o
}

func (o RoleMapOutput) MapIndex(k pulumi.StringInput) RoleOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *Role {
		return vs[0].(map[string]*Role)[vs[1].(string)]
	}).(RoleOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*RoleInput)(nil)).Elem(), &Role{})
	pulumi.RegisterInputType(reflect.TypeOf((*RoleArrayInput)(nil)).Elem(), RoleArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*RoleMapInput)(nil)).Elem(), RoleMap{})
	pulumi.RegisterOutputType(RoleOutput{})
	pulumi.RegisterOutputType(RoleArrayOutput{})
	pulumi.RegisterOutputType(RoleMapOutput{})
}
