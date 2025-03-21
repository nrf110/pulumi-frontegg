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

// Configures a Frontegg allowed origin.
type AllowedOrigin struct {
	pulumi.CustomResourceState

	// The allowed origin URI.
	AllowedOrigin pulumi.StringOutput `pulumi:"allowedOrigin"`
}

// NewAllowedOrigin registers a new resource with the given unique name, arguments, and options.
func NewAllowedOrigin(ctx *pulumi.Context,
	name string, args *AllowedOriginArgs, opts ...pulumi.ResourceOption) (*AllowedOrigin, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AllowedOrigin == nil {
		return nil, errors.New("invalid value for required argument 'AllowedOrigin'")
	}
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource AllowedOrigin
	err := ctx.RegisterResource("frontegg:index/allowedOrigin:AllowedOrigin", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetAllowedOrigin gets an existing AllowedOrigin resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetAllowedOrigin(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *AllowedOriginState, opts ...pulumi.ResourceOption) (*AllowedOrigin, error) {
	var resource AllowedOrigin
	err := ctx.ReadResource("frontegg:index/allowedOrigin:AllowedOrigin", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering AllowedOrigin resources.
type allowedOriginState struct {
	// The allowed origin URI.
	AllowedOrigin *string `pulumi:"allowedOrigin"`
}

type AllowedOriginState struct {
	// The allowed origin URI.
	AllowedOrigin pulumi.StringPtrInput
}

func (AllowedOriginState) ElementType() reflect.Type {
	return reflect.TypeOf((*allowedOriginState)(nil)).Elem()
}

type allowedOriginArgs struct {
	// The allowed origin URI.
	AllowedOrigin string `pulumi:"allowedOrigin"`
}

// The set of arguments for constructing a AllowedOrigin resource.
type AllowedOriginArgs struct {
	// The allowed origin URI.
	AllowedOrigin pulumi.StringInput
}

func (AllowedOriginArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*allowedOriginArgs)(nil)).Elem()
}

type AllowedOriginInput interface {
	pulumi.Input

	ToAllowedOriginOutput() AllowedOriginOutput
	ToAllowedOriginOutputWithContext(ctx context.Context) AllowedOriginOutput
}

func (*AllowedOrigin) ElementType() reflect.Type {
	return reflect.TypeOf((**AllowedOrigin)(nil)).Elem()
}

func (i *AllowedOrigin) ToAllowedOriginOutput() AllowedOriginOutput {
	return i.ToAllowedOriginOutputWithContext(context.Background())
}

func (i *AllowedOrigin) ToAllowedOriginOutputWithContext(ctx context.Context) AllowedOriginOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AllowedOriginOutput)
}

// AllowedOriginArrayInput is an input type that accepts AllowedOriginArray and AllowedOriginArrayOutput values.
// You can construct a concrete instance of `AllowedOriginArrayInput` via:
//
//	AllowedOriginArray{ AllowedOriginArgs{...} }
type AllowedOriginArrayInput interface {
	pulumi.Input

	ToAllowedOriginArrayOutput() AllowedOriginArrayOutput
	ToAllowedOriginArrayOutputWithContext(context.Context) AllowedOriginArrayOutput
}

type AllowedOriginArray []AllowedOriginInput

func (AllowedOriginArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*AllowedOrigin)(nil)).Elem()
}

func (i AllowedOriginArray) ToAllowedOriginArrayOutput() AllowedOriginArrayOutput {
	return i.ToAllowedOriginArrayOutputWithContext(context.Background())
}

func (i AllowedOriginArray) ToAllowedOriginArrayOutputWithContext(ctx context.Context) AllowedOriginArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AllowedOriginArrayOutput)
}

// AllowedOriginMapInput is an input type that accepts AllowedOriginMap and AllowedOriginMapOutput values.
// You can construct a concrete instance of `AllowedOriginMapInput` via:
//
//	AllowedOriginMap{ "key": AllowedOriginArgs{...} }
type AllowedOriginMapInput interface {
	pulumi.Input

	ToAllowedOriginMapOutput() AllowedOriginMapOutput
	ToAllowedOriginMapOutputWithContext(context.Context) AllowedOriginMapOutput
}

type AllowedOriginMap map[string]AllowedOriginInput

func (AllowedOriginMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*AllowedOrigin)(nil)).Elem()
}

func (i AllowedOriginMap) ToAllowedOriginMapOutput() AllowedOriginMapOutput {
	return i.ToAllowedOriginMapOutputWithContext(context.Background())
}

func (i AllowedOriginMap) ToAllowedOriginMapOutputWithContext(ctx context.Context) AllowedOriginMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(AllowedOriginMapOutput)
}

type AllowedOriginOutput struct{ *pulumi.OutputState }

func (AllowedOriginOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**AllowedOrigin)(nil)).Elem()
}

func (o AllowedOriginOutput) ToAllowedOriginOutput() AllowedOriginOutput {
	return o
}

func (o AllowedOriginOutput) ToAllowedOriginOutputWithContext(ctx context.Context) AllowedOriginOutput {
	return o
}

// The allowed origin URI.
func (o AllowedOriginOutput) AllowedOrigin() pulumi.StringOutput {
	return o.ApplyT(func(v *AllowedOrigin) pulumi.StringOutput { return v.AllowedOrigin }).(pulumi.StringOutput)
}

type AllowedOriginArrayOutput struct{ *pulumi.OutputState }

func (AllowedOriginArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*AllowedOrigin)(nil)).Elem()
}

func (o AllowedOriginArrayOutput) ToAllowedOriginArrayOutput() AllowedOriginArrayOutput {
	return o
}

func (o AllowedOriginArrayOutput) ToAllowedOriginArrayOutputWithContext(ctx context.Context) AllowedOriginArrayOutput {
	return o
}

func (o AllowedOriginArrayOutput) Index(i pulumi.IntInput) AllowedOriginOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *AllowedOrigin {
		return vs[0].([]*AllowedOrigin)[vs[1].(int)]
	}).(AllowedOriginOutput)
}

type AllowedOriginMapOutput struct{ *pulumi.OutputState }

func (AllowedOriginMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*AllowedOrigin)(nil)).Elem()
}

func (o AllowedOriginMapOutput) ToAllowedOriginMapOutput() AllowedOriginMapOutput {
	return o
}

func (o AllowedOriginMapOutput) ToAllowedOriginMapOutputWithContext(ctx context.Context) AllowedOriginMapOutput {
	return o
}

func (o AllowedOriginMapOutput) MapIndex(k pulumi.StringInput) AllowedOriginOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *AllowedOrigin {
		return vs[0].(map[string]*AllowedOrigin)[vs[1].(string)]
	}).(AllowedOriginOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*AllowedOriginInput)(nil)).Elem(), &AllowedOrigin{})
	pulumi.RegisterInputType(reflect.TypeOf((*AllowedOriginArrayInput)(nil)).Elem(), AllowedOriginArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*AllowedOriginMapInput)(nil)).Elem(), AllowedOriginMap{})
	pulumi.RegisterOutputType(AllowedOriginOutput{})
	pulumi.RegisterOutputType(AllowedOriginArrayOutput{})
	pulumi.RegisterOutputType(AllowedOriginMapOutput{})
}
