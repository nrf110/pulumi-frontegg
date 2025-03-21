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

// Configures a Frontegg Email provider.
type EmailProvider struct {
	pulumi.CustomResourceState

	// The timestamp at which the permission was created.
	CreatedAt pulumi.StringOutput `pulumi:"createdAt"`
	// Required for Mailgun (required only for Mailgun).
	Domain pulumi.StringPtrOutput `pulumi:"domain"`
	// Provider ID (required only for AWS SES).
	ProviderId pulumi.StringPtrOutput `pulumi:"providerId"`
	// Name of the email provider (If the provider is changed, the old provider's configuration will be deleted).
	ProviderName pulumi.StringOutput `pulumi:"providerName"`
	// Required for AWS SES or Mailgun.
	Region pulumi.StringPtrOutput `pulumi:"region"`
	// A secret to be included with the event.
	Secret pulumi.StringOutput `pulumi:"secret"`
	// The timestamp at which the permission was updated.
	UpdatedAt pulumi.StringOutput `pulumi:"updatedAt"`
}

// NewEmailProvider registers a new resource with the given unique name, arguments, and options.
func NewEmailProvider(ctx *pulumi.Context,
	name string, args *EmailProviderArgs, opts ...pulumi.ResourceOption) (*EmailProvider, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.ProviderName == nil {
		return nil, errors.New("invalid value for required argument 'ProviderName'")
	}
	if args.Secret == nil {
		return nil, errors.New("invalid value for required argument 'Secret'")
	}
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource EmailProvider
	err := ctx.RegisterResource("frontegg:index/emailProvider:EmailProvider", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetEmailProvider gets an existing EmailProvider resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetEmailProvider(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *EmailProviderState, opts ...pulumi.ResourceOption) (*EmailProvider, error) {
	var resource EmailProvider
	err := ctx.ReadResource("frontegg:index/emailProvider:EmailProvider", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering EmailProvider resources.
type emailProviderState struct {
	// The timestamp at which the permission was created.
	CreatedAt *string `pulumi:"createdAt"`
	// Required for Mailgun (required only for Mailgun).
	Domain *string `pulumi:"domain"`
	// Provider ID (required only for AWS SES).
	ProviderId *string `pulumi:"providerId"`
	// Name of the email provider (If the provider is changed, the old provider's configuration will be deleted).
	ProviderName *string `pulumi:"providerName"`
	// Required for AWS SES or Mailgun.
	Region *string `pulumi:"region"`
	// A secret to be included with the event.
	Secret *string `pulumi:"secret"`
	// The timestamp at which the permission was updated.
	UpdatedAt *string `pulumi:"updatedAt"`
}

type EmailProviderState struct {
	// The timestamp at which the permission was created.
	CreatedAt pulumi.StringPtrInput
	// Required for Mailgun (required only for Mailgun).
	Domain pulumi.StringPtrInput
	// Provider ID (required only for AWS SES).
	ProviderId pulumi.StringPtrInput
	// Name of the email provider (If the provider is changed, the old provider's configuration will be deleted).
	ProviderName pulumi.StringPtrInput
	// Required for AWS SES or Mailgun.
	Region pulumi.StringPtrInput
	// A secret to be included with the event.
	Secret pulumi.StringPtrInput
	// The timestamp at which the permission was updated.
	UpdatedAt pulumi.StringPtrInput
}

func (EmailProviderState) ElementType() reflect.Type {
	return reflect.TypeOf((*emailProviderState)(nil)).Elem()
}

type emailProviderArgs struct {
	// Required for Mailgun (required only for Mailgun).
	Domain *string `pulumi:"domain"`
	// Provider ID (required only for AWS SES).
	ProviderId *string `pulumi:"providerId"`
	// Name of the email provider (If the provider is changed, the old provider's configuration will be deleted).
	ProviderName string `pulumi:"providerName"`
	// Required for AWS SES or Mailgun.
	Region *string `pulumi:"region"`
	// A secret to be included with the event.
	Secret string `pulumi:"secret"`
}

// The set of arguments for constructing a EmailProvider resource.
type EmailProviderArgs struct {
	// Required for Mailgun (required only for Mailgun).
	Domain pulumi.StringPtrInput
	// Provider ID (required only for AWS SES).
	ProviderId pulumi.StringPtrInput
	// Name of the email provider (If the provider is changed, the old provider's configuration will be deleted).
	ProviderName pulumi.StringInput
	// Required for AWS SES or Mailgun.
	Region pulumi.StringPtrInput
	// A secret to be included with the event.
	Secret pulumi.StringInput
}

func (EmailProviderArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*emailProviderArgs)(nil)).Elem()
}

type EmailProviderInput interface {
	pulumi.Input

	ToEmailProviderOutput() EmailProviderOutput
	ToEmailProviderOutputWithContext(ctx context.Context) EmailProviderOutput
}

func (*EmailProvider) ElementType() reflect.Type {
	return reflect.TypeOf((**EmailProvider)(nil)).Elem()
}

func (i *EmailProvider) ToEmailProviderOutput() EmailProviderOutput {
	return i.ToEmailProviderOutputWithContext(context.Background())
}

func (i *EmailProvider) ToEmailProviderOutputWithContext(ctx context.Context) EmailProviderOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EmailProviderOutput)
}

// EmailProviderArrayInput is an input type that accepts EmailProviderArray and EmailProviderArrayOutput values.
// You can construct a concrete instance of `EmailProviderArrayInput` via:
//
//	EmailProviderArray{ EmailProviderArgs{...} }
type EmailProviderArrayInput interface {
	pulumi.Input

	ToEmailProviderArrayOutput() EmailProviderArrayOutput
	ToEmailProviderArrayOutputWithContext(context.Context) EmailProviderArrayOutput
}

type EmailProviderArray []EmailProviderInput

func (EmailProviderArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*EmailProvider)(nil)).Elem()
}

func (i EmailProviderArray) ToEmailProviderArrayOutput() EmailProviderArrayOutput {
	return i.ToEmailProviderArrayOutputWithContext(context.Background())
}

func (i EmailProviderArray) ToEmailProviderArrayOutputWithContext(ctx context.Context) EmailProviderArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EmailProviderArrayOutput)
}

// EmailProviderMapInput is an input type that accepts EmailProviderMap and EmailProviderMapOutput values.
// You can construct a concrete instance of `EmailProviderMapInput` via:
//
//	EmailProviderMap{ "key": EmailProviderArgs{...} }
type EmailProviderMapInput interface {
	pulumi.Input

	ToEmailProviderMapOutput() EmailProviderMapOutput
	ToEmailProviderMapOutputWithContext(context.Context) EmailProviderMapOutput
}

type EmailProviderMap map[string]EmailProviderInput

func (EmailProviderMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*EmailProvider)(nil)).Elem()
}

func (i EmailProviderMap) ToEmailProviderMapOutput() EmailProviderMapOutput {
	return i.ToEmailProviderMapOutputWithContext(context.Background())
}

func (i EmailProviderMap) ToEmailProviderMapOutputWithContext(ctx context.Context) EmailProviderMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(EmailProviderMapOutput)
}

type EmailProviderOutput struct{ *pulumi.OutputState }

func (EmailProviderOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**EmailProvider)(nil)).Elem()
}

func (o EmailProviderOutput) ToEmailProviderOutput() EmailProviderOutput {
	return o
}

func (o EmailProviderOutput) ToEmailProviderOutputWithContext(ctx context.Context) EmailProviderOutput {
	return o
}

// The timestamp at which the permission was created.
func (o EmailProviderOutput) CreatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *EmailProvider) pulumi.StringOutput { return v.CreatedAt }).(pulumi.StringOutput)
}

// Required for Mailgun (required only for Mailgun).
func (o EmailProviderOutput) Domain() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *EmailProvider) pulumi.StringPtrOutput { return v.Domain }).(pulumi.StringPtrOutput)
}

// Provider ID (required only for AWS SES).
func (o EmailProviderOutput) ProviderId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *EmailProvider) pulumi.StringPtrOutput { return v.ProviderId }).(pulumi.StringPtrOutput)
}

// Name of the email provider (If the provider is changed, the old provider's configuration will be deleted).
func (o EmailProviderOutput) ProviderName() pulumi.StringOutput {
	return o.ApplyT(func(v *EmailProvider) pulumi.StringOutput { return v.ProviderName }).(pulumi.StringOutput)
}

// Required for AWS SES or Mailgun.
func (o EmailProviderOutput) Region() pulumi.StringPtrOutput {
	return o.ApplyT(func(v *EmailProvider) pulumi.StringPtrOutput { return v.Region }).(pulumi.StringPtrOutput)
}

// A secret to be included with the event.
func (o EmailProviderOutput) Secret() pulumi.StringOutput {
	return o.ApplyT(func(v *EmailProvider) pulumi.StringOutput { return v.Secret }).(pulumi.StringOutput)
}

// The timestamp at which the permission was updated.
func (o EmailProviderOutput) UpdatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v *EmailProvider) pulumi.StringOutput { return v.UpdatedAt }).(pulumi.StringOutput)
}

type EmailProviderArrayOutput struct{ *pulumi.OutputState }

func (EmailProviderArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*EmailProvider)(nil)).Elem()
}

func (o EmailProviderArrayOutput) ToEmailProviderArrayOutput() EmailProviderArrayOutput {
	return o
}

func (o EmailProviderArrayOutput) ToEmailProviderArrayOutputWithContext(ctx context.Context) EmailProviderArrayOutput {
	return o
}

func (o EmailProviderArrayOutput) Index(i pulumi.IntInput) EmailProviderOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) *EmailProvider {
		return vs[0].([]*EmailProvider)[vs[1].(int)]
	}).(EmailProviderOutput)
}

type EmailProviderMapOutput struct{ *pulumi.OutputState }

func (EmailProviderMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*EmailProvider)(nil)).Elem()
}

func (o EmailProviderMapOutput) ToEmailProviderMapOutput() EmailProviderMapOutput {
	return o
}

func (o EmailProviderMapOutput) ToEmailProviderMapOutputWithContext(ctx context.Context) EmailProviderMapOutput {
	return o
}

func (o EmailProviderMapOutput) MapIndex(k pulumi.StringInput) EmailProviderOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) *EmailProvider {
		return vs[0].(map[string]*EmailProvider)[vs[1].(string)]
	}).(EmailProviderOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*EmailProviderInput)(nil)).Elem(), &EmailProvider{})
	pulumi.RegisterInputType(reflect.TypeOf((*EmailProviderArrayInput)(nil)).Elem(), EmailProviderArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*EmailProviderMapInput)(nil)).Elem(), EmailProviderMap{})
	pulumi.RegisterOutputType(EmailProviderOutput{})
	pulumi.RegisterOutputType(EmailProviderArrayOutput{})
	pulumi.RegisterOutputType(EmailProviderMapOutput{})
}
